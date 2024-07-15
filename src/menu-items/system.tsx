// ICONS IMPORT
// PROJECTS IMPORT
import { NavItemType } from '~/types/menu';
import { AppstoreAddOutlined, PlusOutlined, TeamOutlined } from '@ant-design/icons';
import { NavActionType } from '~/config';

const icons = {
  AppstoreAddOutlined,
  TeamOutlined,
  PlusOutlined
};

const system: NavItemType = {
  id: 'group-system',
  title: 'System',
  icon: icons.AppstoreAddOutlined,
  type: 'collapse',
  children: [
    {
      id: 'user',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.TeamOutlined,
      breadcrumbs: true,
      children: [
        {
          id: 'user-list',
          title: 'List',
          type: 'item',
          url: '/users',
          actions: [
            {
              type: NavActionType.FUNCTION,
              label: 'Add Customer',
              icon: icons.PlusOutlined
            }
          ]
        }
      ]
    }
  ]
};

export default system;
