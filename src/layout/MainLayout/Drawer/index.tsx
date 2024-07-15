// THIRD-PARTY IMPORT
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

// PROJECTS IMPORT
import DrawerContent from '~/layout/MainLayout/Drawer/DrawerContent';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import MiniDrawerStyled from '~/layout/MainLayout/Drawer/MiniDrawerStyled';
import { DRAWER_WIDTH } from '~/config';
import { openDrawer } from '~/store/slices/menu';
import { useDispatch, useSelector } from '~/store';

interface Props {
  window?: () => Window;
}

const MainDrawer = ({ window }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;
  const { drawerOpen } = useSelector((state) => state.menu);

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen} />, [drawerOpen]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchesLg ? (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => dispatch(openDrawer(!drawerOpen))}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
