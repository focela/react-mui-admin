// TYPES
import { DefaultConfigProps, LAYOUT_CONST } from '~/types/config';

export const APP_DEFAULT_PATH = '/dashboard/analytics';

const config: DefaultConfigProps = {
  container: true,
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  layout: LAYOUT_CONST.VERTICAL,
  miniDrawer: false,
  mode: 'light',
  presetColor: 'default',
  rtlLayout: false
};

export default config;
