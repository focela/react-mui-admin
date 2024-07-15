import { CardMedia, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import MainCard from '~/components/cards/MainCard';
import useConfig from '~/hooks/useConfig';
import { LAYOUT_CONST } from '~/types/config';
import { openDrawer } from '~/store/slices/menu';
import { useDispatch, useSelector } from '~/store';
import defaultLayout from '~/assets/images/customization/default.svg';
import miniMenu from '~/assets/images/customization/mini-menu.svg';
import rtlLayoutImg from '~/assets/images/customization/rtl.svg';

const ThemeLayout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));

  const { miniDrawer, rtlLayout, onChangeRTL, onChangeMiniDrawer, layout } = useConfig();
  const { drawerOpen } = useSelector((state) => state.menu);

  let initialTheme = 'default';
  if (miniDrawer) initialTheme = 'mini';
  if (rtlLayout) initialTheme = 'rtl';

  const [value, setValue] = useState<string | null>(initialTheme);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === 'default') {
      if (rtlLayout) {
        onChangeRTL(false);
      }
      if (miniDrawer) {
        onChangeMiniDrawer(false);
      }
      if (!drawerOpen) {
        dispatch(openDrawer(true));
      }
    }
    if (newValue === 'mini') {
      onChangeMiniDrawer(true);
      if (drawerOpen) {
        dispatch(openDrawer(false));
      }
    }
    if (newValue === 'rtl') {
      onChangeRTL(true);
    }
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={value} onChange={handleRadioChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            value="default"
            control={<Radio value="default" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: value === 'default' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(value === 'default' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Default</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>

        {layout === LAYOUT_CONST.VERTICAL || matchesLg ? (
          <Grid item>
            <FormControlLabel
              value="mini"
              control={<Radio value="mini" sx={{ display: 'none' }} />}
              sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
              label={
                <MainCard
                  content={false}
                  sx={{ bgcolor: value === 'mini' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                  border={false}
                  {...(value === 'mini' && { boxShadow: true, shadow: theme.customShadows.primary })}
                >
                  <Stack spacing={1.25} alignItems="center">
                    <CardMedia component="img" src={miniMenu} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                    <Typography variant="caption">Mini Drawer</Typography>
                  </Stack>
                </MainCard>
              }
            />
          </Grid>
        ) : null}

        <Grid item>
          <FormControlLabel
            value="rtl"
            control={<Radio value="rtl" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: value === 'rtl' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(value === 'rtl' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={rtlLayoutImg} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">RTL</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeLayout;
