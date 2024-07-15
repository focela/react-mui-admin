import { DefaultConfigProps, LAYOUT_CONST } from '~/types/config';

export const APP_DEFAULT_PATH = '/dashboard';
export const DRAWER_WIDTH = 260;
export const MINI_DRAWER_WIDTH = 60;
export const HORIZONTAL_MAX_ITEM = 6;

export enum NavActionType {
  FUNCTION = 'function',
  LINK = 'link'
}

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
