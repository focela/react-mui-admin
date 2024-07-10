import * as Theme from '@mui/material';

// PROJECTS
import { CustomShadowProps } from '~/types/theme';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
  }
}
