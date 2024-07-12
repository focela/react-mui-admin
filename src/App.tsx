import ThemeCustomization from '~/themes';
import RTLLayout from '~/components/RTLLayout';
import Locales from '~/components/Locales';
import ScrollTop from '~/components/ScrollTop';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';
import Snackbar from '~/components/third-party/Snackbar';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes';
import MuiSnackbar from '~/components/extended/Snackbar';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Snackbar>
                  <RouterProvider router={router} />
                  <MuiSnackbar />
                </Snackbar>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
