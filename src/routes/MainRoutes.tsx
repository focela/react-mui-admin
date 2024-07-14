import AuthGuard from '~/utils/route-guard/AuthGuard';
import MainLayout from '~/layout/MainLayout';
import Loadable from '~/components/Loadable';
import { lazy } from 'react';

const Dashboard = Loadable(lazy(() => import('~/pages/dashboard')));

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    }
  ]
};

export default MainRoutes;
