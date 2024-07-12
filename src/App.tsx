import ThemeCustomization from '~/themes';
import RTLLayout from '~/components/RTLLayout';
import Locales from '~/components/Locales';
import ScrollTop from '~/components/ScrollTop';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <h1>This is App.tsx!</h1>;
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
