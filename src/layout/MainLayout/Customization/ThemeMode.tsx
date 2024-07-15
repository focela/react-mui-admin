import { ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from '~/components/cards/MainCard';
import useConfig from '~/hooks/useConfig';
import defaultLayout from '~/assets/images/customization/default.svg';
import darkLayout from '~/assets/images/customization/dark.svg';
import { PaletteMode } from '@mui/material';

export default function ThemeMode() {
  const theme = useTheme();

  const { mode, onChangeMode } = useConfig();

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMode(event.target.value as PaletteMode);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={mode} onChange={handleModeChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value="light" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === 'dark' ? 'secondary.lighter' : 'primary.lighter', p: 1 }}
                border={false}
                {...(mode === 'light' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Light</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value="dark" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === 'dark' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(mode === 'dark' && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={darkLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Dark</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
}
