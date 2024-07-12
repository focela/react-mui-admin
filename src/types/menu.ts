import { GenericCardProps } from '~/types/index';
import { ReactNode } from 'react';
import { ChipProps } from '@mui/material';

export type NavItemType = {
  id?: string;
  icon?: GenericCardProps['iconPrimary'];
  target?: boolean;
  external?: boolean;
  url?: string | undefined;
  type?: string;
  title?: ReactNode | string;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  caption?: ReactNode | string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  chip?: ChipProps;
  children?: NavItemType[];
  elements?: NavItemType[];
  search?: string;
};

export type MenuProps = {
  openItem: string[];
  openComponent: string;
  selectedID: string | null;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
  menu: NavItemType;
  error: null;
};
