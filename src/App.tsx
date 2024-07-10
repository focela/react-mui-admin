// PROJECTS
import ThemeCustomization from '~/themes';
import RTLLayout from '~/components/RTLLayout';
import Locales from '~/components/Locales';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <h1>This is App.tsx</h1>;
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
