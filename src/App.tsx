import ThemeCustomization from '~/themes';
import RTLLayout from '~/components/RTLLayout';
import Locales from '~/components/Locales';
import ScrollTop from '~/components/ScrollTop';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <h1>This is App.tsx!</h1>;
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
