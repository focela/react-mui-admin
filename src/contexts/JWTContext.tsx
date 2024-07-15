import { createContext, ReactElement, useEffect, useReducer } from 'react';
import authReducer from '~/store/authReducer';
import { InitialLoginContextProps, JWTContextType } from '~/types/auth';
import { jwtDecode } from 'jwt-decode';
import { KeyedObject } from '~/types';
import axiosInstance from '~/utils/axios';
import { getUser, postLogin } from '~/api/auth';
import Loader from '~/components/Loader';

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const response = await getUser();
          const user = response.data;
          dispatch({
            type: 'LOGIN',
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: 'LOGOUT'
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'LOGOUT'
        });
      }
    };

    init();
  }, []);

  const login = async (account: string, password: string) => {
    const response = await postLogin({ account, password });
    const { access_token, user } = response.data;
    setSession(access_token);
    dispatch({
      type: 'LOGIN',
      payload: {
        isLoggedIn: true,
        user
      }
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
