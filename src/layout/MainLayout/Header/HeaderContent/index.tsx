import useConfig from '~/hooks/useConfig';
import { Theme, useMediaQuery } from '@mui/material';
import { LAYOUT_CONST } from '~/types/config';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import SearchSection from '~/layout/MainLayout/Header/HeaderContent/SearchSection';

export default function HeaderContent() {
  const { layout } = useConfig();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg && <DrawerHeader open={true} />}
      {!matchDownLg && <SearchSection />}
    </>
  );
}
