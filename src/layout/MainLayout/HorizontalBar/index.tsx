// THIRD-PARTY IMPORT
import React, { ReactElement } from 'react';
import { AppBar, Box, Container, useScrollTrigger, useTheme } from '@mui/material';

// PROJECTS IMPORT
import Sidebar from '~/layout/MainLayout/Sidebar';
import useConfig from '~/hooks/useConfig';

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });

  theme.shadows[4] = theme.customShadows.z1;

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const CustomAppBar = () => {
  const theme = useTheme();
  const { container } = useConfig();

  return (
    <ElevationScroll>
      <AppBar
        sx={{
          top: 60,
          bgcolor: theme.palette.background.paper,
          width: '100%',
          height: 62,
          justifyContent: 'center',
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          zIndex: 1098,
          color: theme.palette.grey[500]
        }}
      >
        <Container maxWidth={container ? 'xl' : false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Sidebar />
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default CustomAppBar;
