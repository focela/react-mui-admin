import { PaletteMode } from '@mui/material';

export enum LAYOUT_CONST {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export type DefaultConfigProps = {
  container: boolean;
  fontFamily: string;
  i18n: string;
  layout: string;
  miniDrawer: boolean;
  mode: PaletteMode;
  presetColor: string;
  rtlLayout: boolean;
};

export type CustomizationProps = {
  container: boolean;
  fontFamily: string;
  i18n: string;
  layout: string;
  miniDrawer: boolean;
  mode: PaletteMode;
  presetColor: string;
  rtlLayout: boolean;
  onChangeContainer: () => void;
  onChangeFontFamily: (fontFamily: string) => void;
  onChangeLocalization: (i18n: string) => void;
  onChangeLayout: (layout: string) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeMode: (mode: PaletteMode) => void;
  onChangePresetColor: (presetColor: string) => void;
  onChangeRTL: (rtlLayout: boolean) => void;
};
