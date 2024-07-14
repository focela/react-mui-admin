import { AppBarProps, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import AppBarStyled from '~/layout/MainLayout/Header/AppBarStyled';
import { useDispatch, useSelector } from '~/store';
import AppBar from '@mui/material/AppBar';
import useConfig from '~/hooks/useConfig';
import { ReactNode, useMemo } from 'react';
import IconButton from '~/components/extended/IconButton';
import { openDrawer } from '~/store/slices/menu';
import { LAYOUT_CONST } from '~/types/config';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '~/config';
import HeaderContent from '~/layout/MainLayout/Header/HeaderContent';

export default function Header() {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  const { layout, mode } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;
  const iconBackColor = mode === 'dark' ? 'background.default' : 'grey.100';

  const headerContent = useMemo(() => <HeaderContent />, []);

  const header: ReactNode = (
    <Toolbar>
      {!isHorizontal ? (
        <IconButton
          aria-label="open drawer"
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          edge="start"
          color="secondary"
          variant="light"
          sx={{ color: 'text.primary', bgcolor: drawerOpen ? 'transparent' : iconBackColor, ml: { xs: 0, lg: -2 } }}
        >
          {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </IconButton>
      ) : null}
      {headerContent}
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
          {header}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{header}</AppBar>
      )}
    </>
  );
}
