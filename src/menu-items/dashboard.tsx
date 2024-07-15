// ICONS IMPORT
// PROJECTS IMPORT
import { NavItemType } from '~/types/menu';
import { DashboardOutlined } from '@ant-design/icons';

const icons = {
  DashboardOutlined
};

const dashboard: NavItemType = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
