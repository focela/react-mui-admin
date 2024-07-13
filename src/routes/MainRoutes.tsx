import AuthGuard from '~/utils/route-guard/AuthGuard';
import MainLayout from '~/layout/MainLayout';

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard'
        }
      ]
    }
  ]
};

export default MainRoutes;
