import { UserProfile } from '~/types/user';
import { ReactElement } from 'react';

export type GuardProps = {
  children: ReactElement | null;
};

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  login: (account: string, password: string) => Promise<void>;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  token?: string | null;
}

export interface AuthReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}
