import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import { handlerDrawerOpen, useGetMenuMaster } from '~/api/menu';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/types/config';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '~/config';
import { ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import IconButton from '~/components/extended/IconButton';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import AppBarStyled from '~/layout/MainLayout/Header/AppBarStyled';

export default function Header() {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const { layout, mode } = useConfig();

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;

  const iconBackColor = mode === 'dark' ? 'background.default' : 'grey.100';

  const mainHeader: ReactNode = (
    <Toolbar>
      {!isHorizontal ? (
        <IconButton
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          edge="start"
          color="secondary"
          variant="light"
          sx={{ color: 'text.primary', bgcolor: drawerOpen ? 'transparent' : iconBackColor, ml: { xs: 0, lg: -2 } }}
        >
          {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </IconButton>
      ) : null}
      <h1>xasds</h1>
    </Toolbar>
  );

  const appBar: AppBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: '1px solid',
      borderBottomColor: 'divider',
      zIndex: 1200,
      width: isHorizontal
        ? '100%'
        : { xs: '100%', lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `calc(100% - ${MINI_DRAWER_WIDTH}px)` }
    }
  };

  return (
    <>
      {!matchDownLg ? (
        <AppBarStyled open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}
