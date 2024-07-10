import { createContext, ReactElement } from 'react';

// MUI
import { PaletteMode } from '@mui/material';

// PROJECTS
import defaultConfig from '~/config';
import useLocalStorage from '~/hooks/useLocalStorage';

// TYPES
import { CustomizationProps } from '~/types/config';

const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeContainer: () => {},
  onChangeFontFamily: () => {},
  onChangeLocalization: () => {},
  onChangeLayout: () => {},
  onChangeMiniDrawer: () => {},
  onChangeMode: () => {},
  onChangePresetColor: () => {},
  onChangeRTL: () => {}
};

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactElement;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage('focela-config', initialState);

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container
    });
  };

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily
    });
  };

  const onChangeLocalization = (i18n: string) => {
    setConfig({
      ...config,
      i18n
    });
  };

  const onChangeLayout = (layout: string) => {
    setConfig({
      ...config,
      layout
    });
  };

  const onChangeMiniDrawer = (miniDrawer: boolean) => {
    setConfig({
      ...config,
      miniDrawer
    });
  };

  const onChangeMode = (mode: PaletteMode) => {
    setConfig({
      ...config,
      mode
    });
  };

  const onChangePresetColor = (presetColor: string) => {
    setConfig({
      ...config,
      presetColor
    });
  };

  const onChangeRTL = (rtlLayout: boolean) => {
    setConfig({
      ...config,
      rtlLayout
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeContainer,
        onChangeFontFamily,
        onChangeLocalization,
        onChangeLayout,
        onChangeMiniDrawer,
        onChangeMode,
        onChangePresetColor,
        onChangeRTL
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
