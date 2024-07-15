// PROJECTS IMPORT
import dashboard from '~/menu-items/dashboard';
import { NavItemType } from '~/types/menu';
import system from '~/menu-items/system';

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, system]
};

export default menuItems;
