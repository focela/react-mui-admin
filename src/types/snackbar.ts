// THIRD-PARTY IMPORT
import { AlertProps, SnackbarOrigin } from '@mui/material';

export type SnackbarActionProps = {
  payload?: SnackbarProps;
};

export interface SnackbarProps {
  action: boolean;
  open: boolean;
  message: string;
  anchorOrigin: SnackbarOrigin;
  variant: string;
  alert: AlertProps;
  transition: string;
  close: boolean;
  actionButton: boolean;
  dense: boolean;
  maxStack: number;
  iconVariant: string;
  severity?: 'info' | 'success' | 'warning' | 'error';
}
