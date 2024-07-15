import Header from '~/layout/MainLayout/Header';
import Box from '@mui/material/Box';
import { LAYOUT_CONST } from '~/types/config';
import useConfig from '~/hooks/useConfig';
import { Breadcrumbs, Toolbar, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Drawer from '~/layout/MainLayout/Drawer';
import HorizontalBar from '~/layout/MainLayout/HorizontalBar';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Footer from '~/layout/MainLayout/Sidebar/Footer';

const MainLayout = () => {
  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const { container, layout } = useConfig();
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg;
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />

      {!isHorizontal ? <Drawer /> : <HorizontalBar />}

      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
