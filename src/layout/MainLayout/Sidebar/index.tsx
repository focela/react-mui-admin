// THIRD-PARTY IMPORT
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLayoutEffect, useState } from 'react';

// PROJECTS IMPORT
import menuItem from '~/menu-items';
import NavGroup from '~/layout/MainLayout/Sidebar/NavGroup';
import useConfig from '~/hooks/useConfig';
import { HORIZONTAL_MAX_ITEM } from '~/config';
import { LAYOUT_CONST } from '~/types/config';
import { NavItemType } from '~/types/menu';
import { useSelector } from '~/store';

const Sidebar = () => {
  const theme = useTheme();
  const { layout } = useConfig();

  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isHorizontal = layout === LAYOUT_CONST.HORIZONTAL && !matchesLg;

  const { drawerOpen } = useSelector((state) => state.menu);
  const [selectedItems, setSelectedItems] = useState<string | undefined>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<{ items: NavItemType[] }>({ items: [] });

  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items.slice(lastItem - 1, menuItems.items.length).map((item) => ({
      title: item.title,
      elements: item.children,
      icon: item.icon
    }));
  }

  const navGroups = menuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return (
          <NavGroup
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  useLayoutEffect(() => {
    setMenuItems(menuItem);
    // react-hooks/exhaustive-deps
  }, [menuItem]);

  return (
    <Box
      sx={{
        pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
        '& > ul:first-of-type': { mt: 0 },
        display: isHorizontal ? { xs: 'block', lg: 'flex' } : 'block'
      }}
    >
      {navGroups}
    </Box>
  );
};

export default Sidebar;
