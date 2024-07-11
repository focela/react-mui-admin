import { Link } from 'react-router-dom';
import { To } from 'history';
import { SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Logo from '~/components/logo/LogoMain';
import LogoIcon from '~/components/logo/LogoIcon';
import { APP_DEFAULT_PATH } from '~/config';
import useAuth from '~/hooks/useAuth';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

export default function LogoSection({ reverse, isIcon, sx, to }: Props) {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonBase disableRipple {...(isLoggedIn && { component: Link, to: !to ? APP_DEFAULT_PATH : to, sx })}>
      {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
    </ButtonBase>
  );
}
