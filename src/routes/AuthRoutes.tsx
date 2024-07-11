import GuestGuard from '~/utils/route-guard/GuestGuard';
import MinimalLayout from '~/layout/MinimalLayout';

const AuthRoutes = {
  path: '/',
  children: [
    {
      element: (
        <GuestGuard>
          <MinimalLayout />
        </GuestGuard>
      )
    }
  ]
};

export default AuthRoutes;
