import { PalettesProps } from '@ant-design/colors';
import { PaletteMode } from '@mui/material';
import { PaletteThemeProps } from '~/types/theme';
import Theme1 from '~/themes/theme/theme1';
import Theme2 from '~/themes/theme/theme2';
import Theme3 from '~/themes/theme/theme3';
import Theme4 from '~/themes/theme/theme4';
import Theme5 from '~/themes/theme/theme5';
import Theme6 from '~/themes/theme/theme6';
import Theme7 from '~/themes/theme/theme7';
import Theme8 from '~/themes/theme/theme8';
import Default from '~/themes/theme/default';

export default function Theme(colors: PalettesProps, presetColor: string, mode: PaletteMode): PaletteThemeProps {
  switch (presetColor) {
    case 'theme1':
      return Theme1(colors, mode);
    case 'theme2':
      return Theme2(colors, mode);
    case 'theme3':
      return Theme3(colors, mode);
    case 'theme4':
      return Theme4(colors, mode);
    case 'theme5':
      return Theme5(colors, mode);
    case 'theme6':
      return Theme6(colors, mode);
    case 'theme7':
      return Theme7(colors, mode);
    case 'theme8':
      return Theme8(colors, mode);
    default:
      return Default(colors);
  }
}
