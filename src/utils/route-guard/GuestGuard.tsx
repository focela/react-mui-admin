import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_DEFAULT_PATH } from '~/config';
import useAuth from '~/hooks/useAuth';
import { GuardProps } from '~/types/auth';

export default function GuestGuard({ children }: GuardProps) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location?.state?.from ? location?.state?.from : APP_DEFAULT_PATH, {
        state: {
          from: ''
        },
        replace: true
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
}