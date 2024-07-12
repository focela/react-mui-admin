import Box from '@mui/material/Box';
import Header from '~/layout/MainLayout/Header';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
    </Box>
  );
};

export default MainLayout;
