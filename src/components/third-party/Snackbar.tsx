// MUI IMPORT
import { styled } from '@mui/material/styles';

// THIRD-PARTY IMPORT
import { SnackbarProvider } from '@focela/snackbar';

// PROJECT IMPORT
import Loader from '~/components/Loader';
import { useSelector } from '~/store';

// ASSETS IMPORT
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import WarningOutlined from '@ant-design/icons/WarningOutlined';

const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
  '&.snackbar-MuiContent-default': {
    background: theme.palette.primary.main
  },
  '&.snackbar-MuiContent-error': {
    background: theme.palette.error.main
  },
  '&.snackbar-MuiContent-success': {
    background: theme.palette.success.main
  },
  '&.snackbar-MuiContent-info': {
    background: theme.palette.info.main
  },
  '&.snackbar-MuiContent-warning': {
    background: theme.palette.warning.main
  }
}));

export default function Snackbar({ children }: any) {
  const snackbar = useSelector((state) => state.snackbar);
  const iconSX = { marginRight: 8, fontSize: '1.15rem' };

  if (snackbar === undefined) return <Loader />;

  return (
    <StyledSnackbarProvider
      maxSnack={snackbar.maxStack}
      dense={snackbar.dense}
      iconVariant={
        snackbar.iconVariant === 'useemojis'
          ? {
              success: <CheckCircleOutlined style={iconSX} />,
              error: <CloseCircleOutlined style={iconSX} />,
              warning: <WarningOutlined style={iconSX} />,
              info: <InfoCircleOutlined style={iconSX} />
            }
          : undefined
      }
      hideIconVariant={snackbar.iconVariant === 'hide'}
    >
      {children}
    </StyledSnackbarProvider>
  );
}
