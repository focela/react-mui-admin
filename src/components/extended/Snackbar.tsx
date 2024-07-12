import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import IconButton from '~/components/extended/IconButton';
import MuiSnackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { closeSnackbar } from '~/store/slices/snackbar';
import { KeyedObject } from '~/types';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from '~/store';

function TransitionSlideLeft(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionSlideUp(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionSlideRight(props: SlideProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionSlideDown(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

function GrowTransition(props: SlideProps) {
  return <Grow {...props} />;
}

const animation: KeyedObject = {
  SlideLeft: TransitionSlideLeft,
  SlideUp: TransitionSlideUp,
  SlideRight: TransitionSlideRight,
  SlideDown: TransitionSlideDown,
  Grow: GrowTransition,
  Fade
};

export default function Snackbar() {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackbar);
  const { actionButton, anchorOrigin, alert, close, message, open, transition, variant, severity } = snackbar;

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <>
      <>
        {variant === 'default' && (
          <MuiSnackbar
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            TransitionComponent={animation[transition]}
            action={
              <>
                <Button color="secondary" size="small" onClick={handleClose}>
                  UNDO
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} sx={{ mt: 0.25 }}>
                  <CloseOutlined />
                </IconButton>
              </>
            }
          />
        )}

        {variant === 'alert' && (
          <MuiSnackbar
            TransitionComponent={animation[transition]}
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              variant={alert.variant}
              color={alert.color}
              severity={severity}
              action={
                <>
                  {actionButton !== false && (
                    <Button color={alert.color} size="small" onClick={handleClose}>
                      UNDO
                    </Button>
                  )}
                  {close !== false && (
                    <IconButton
                      sx={{ mt: 0.25 }}
                      size="small"
                      aria-label="close"
                      variant="contained"
                      color={alert.color}
                      onClick={handleClose}
                    >
                      <CloseOutlined />
                    </IconButton>
                  )}
                </>
              }
              sx={{
                ...(alert.variant === 'outlined' && {
                  bgcolor: 'grey.0'
                })
              }}
            >
              {message}
            </Alert>
          </MuiSnackbar>
        )}
      </>
    </>
  );
}
