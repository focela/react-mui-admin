import GuestGuard from '~/utils/route-guard/GuestGuard';
import MinimalLayout from '~/layout/MinimalLayout';
import Loadable from '~/components/Loadable';
import { lazy } from 'react';

const AuthLogin = Loadable(lazy(() => import('~/pages/auth/login')));

const AuthRoutes = {
  path: '/',
  children: [
    {
      element: (
        <GuestGuard>
          <MinimalLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        }
      ]
    }
  ]
};

export default AuthRoutes;
