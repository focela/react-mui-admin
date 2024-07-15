import useConfig from '~/hooks/useConfig';
import { Theme, useMediaQuery } from '@mui/material';
import { LAYOUT_CONST } from '~/types/config';
import DrawerHeader from '~/layout/MainLayout/Drawer/DrawerHeader';
import SearchSection from '~/layout/MainLayout/Header/HeaderContent/SearchSection';
import { useMemo } from 'react';
import MegaMenuSection from '~/layout/MainLayout/Header/HeaderContent/MegaMenuSection';
import LocalizationSection from '~/layout/MainLayout/Header/HeaderContent/LocalizationSection';
import Box from '@mui/material/Box';
import NotificationSection from '~/layout/MainLayout/Header/HeaderContent/NotificationSection';
import MessageSection from '~/layout/MainLayout/Header/HeaderContent/MessageSection';
import FullScreenSection from '~/layout/MainLayout/Header/HeaderContent/FullScreenSection';
import Customization from '~/layout/MainLayout/Customization';
import ProfileSection from '~/layout/MainLayout/Header/HeaderContent/ProfileSection';

export default function HeaderContent() {
  const { layout } = useConfig();

  const matchDownLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  const localization = useMemo(() => <LocalizationSection />, []);

  return (
    <>
      {layout === LAYOUT_CONST.HORIZONTAL && !matchDownLg && <DrawerHeader open={true} />}
      {!matchDownLg && <SearchSection />}
      {!matchDownLg && megaMenu}
      {!matchDownLg && localization}
      {matchDownLg && <Box sx={{ width: '100%', ml: 1 }} />}

      <NotificationSection />
      <MessageSection />
      {!matchDownLg && <FullScreenSection />}

      <Customization />
      {!matchDownLg && <ProfileSection />}
    </>
  );
}
