import { ReactNode, useMemo } from 'react';
import { createTheme, Theme, ThemeOptions, ThemeProvider, TypographyVariantsOptions } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import useConfig from '~/hooks/useConfig';
import Palette from '~/themes/palette';
import Typography from '~/themes/typography';
import { CustomShadowProps } from '~/types/theme';
import CustomShadows from '~/themes/shadows';
import componentsOverride from '~/themes/overrides';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { fontFamily, mode, presetColor, rtlLayout } = useConfig();

  const theme: Theme = useMemo<Theme>(() => Palette(mode, presetColor), [mode, presetColor]);

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(() => Typography(fontFamily), [fontFamily]);

  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => CustomShadows(theme), [theme]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: rtlLayout ? 'rtl' : 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [rtlLayout, theme, themeTypography, themeCustomShadows]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
