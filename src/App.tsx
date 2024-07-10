// PROJECTS
import ThemeCustomization from '~/themes';
import RTLLayout from '~/components/RTLLayout';
import Locales from '~/components/Locales';
import ScrollTop from '~/components/ScrollTop';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';
import Snackbar from '~/components/third-party/Snackbar';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Snackbar>
                  <h1>This is App.tsx</h1>;
                </Snackbar>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
