import { Theme } from '@mui/material';
import { merge } from 'lodash';
import Typography from '~/themes/overrides/Typography';

export default function ComponentsOverrides(theme: Theme) {
  return merge(Typography());
}
