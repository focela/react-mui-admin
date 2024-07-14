import useConfig from '~/hooks/useConfig';
import { Theme, useMediaQuery } from '@mui/material';
import { LAYOUT_CONST } from '~/types/config';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';

export default function HeaderContent() {
  const { layout } = useConfig();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return <>{layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg && <DrawerHeader open={true} />}</>;
}
