// PROJECTS IMPORT
import Sidebar from '~/layout/MainLayout/Sidebar';
import SimpleBar from '~/components/third-party/SimpleBar';
import NavUser from '~/layout/MainLayout/Drawer/DrawerContent/NavUser';

const DrawerContent = () => {
  return (
    <>
      <SimpleBar
        sx={{
          '& .simplebar-content': {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        <Sidebar />
      </SimpleBar>
      <NavUser />
    </>
  );
};

export default DrawerContent;
