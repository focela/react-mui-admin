import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';
import { SnackbarProps } from '~/types/snackbar';

const initialState: SnackbarProps = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  variant: 'default',
  alert: {
    color: 'primary',
    variant: 'filled'
  },
  transition: 'Fade',
  close: false,
  actionButton: false,
  maxStack: 3,
  dense: false,
  iconVariant: 'usedefault'
};

export const endpoints = { key: 'snackbar' };

export function useGetSnackbar() {
  const { data } = useSWR(endpoints.key, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return useMemo(() => ({ snackbar: data! }), [data]);
}

export function openSnackbar(snackbar: SnackbarProps) {
  const { action, open, message, anchorOrigin, variant, alert, transition, close, actionButton } = snackbar;

  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return {
        ...currentSnackbar,
        action: action || initialState.action,
        open: open || initialState.open,
        message: message || initialState.message,
        anchorOrigin: anchorOrigin || initialState.anchorOrigin,
        variant: variant || initialState.variant,
        alert: {
          color: alert?.color || initialState.alert.color,
          variant: alert?.variant || initialState.alert.variant
        },
        transition: transition || initialState.transition,
        close: close || initialState.close,
        actionButton: actionButton || initialState.actionButton
      };
    },
    false
  );
}

export function closeSnackbar() {
  mutate(
    endpoints.key,
    (currentSnackbar: any) => {
      return { ...currentSnackbar, open: false };
    },
    false
  );
}
