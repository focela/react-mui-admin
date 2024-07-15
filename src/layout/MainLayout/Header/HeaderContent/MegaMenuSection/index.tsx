import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from '~/components/cards/MainCard';
import Dot from '~/components/extended/Dot';
import IconButton from '~/components/extended/IconButton';
import Transitions from '~/components/extended/Transitions';
import AnimateButton from '~/components/extended/AnimateButton';
import { DRAWER_WIDTH } from '~/config';
import { ArrowRightOutlined, WindowsOutlined } from '@ant-design/icons';
import backgroundVector from '~/assets/images/mega-menu/back.svg';
import imageChart from '~/assets/images/mega-menu/chart.svg';

export default function MegaMenuSection() {
  const theme = useTheme();

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-180, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top" in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                minWidth: 750,
                width: {
                  md: `calc(100vw - 100px)`,
                  lg: `calc(100vw - ${DRAWER_WIDTH + 100}px)`,
                  xl: `calc(100vw - ${DRAWER_WIDTH + 140}px)`
                },
                maxWidth: 1024
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Grid container>
                    <Grid
                      item
                      md={4}
                      sx={{
                        background: `url(${backgroundVector}), linear-gradient(183.77deg, ${theme.palette.primary.main} 11.46%, ${theme.palette.primary[700]} 100.33%)`
                      }}
                    >
                      <Box sx={{ p: 4.5, pb: 3 }}>
                        <Stack sx={{ color: 'background.paper' }}>
                          <Typography variant="h2" sx={{ fontSize: '1.875rem', mb: 1 }}>
                            Explore Components
                          </Typography>
                          <Typography variant="h6">
                            Try our pre made component pages to check how it feels and suits as per your need.
                          </Typography>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: -1 }}>
                            <AnimateButton>
                              <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                  bgcolor: 'background.paper',
                                  color: 'text.primary',
                                  '&:hover': { bgcolor: 'background.paper', color: 'text.primary' }
                                }}
                                endIcon={<ArrowRightOutlined />}
                                component={Link}
                                to="/components-overview/buttons"
                                target="_blank"
                              >
                                View All
                              </Button>
                            </AnimateButton>
                            <CardMedia component="img" src={imageChart} alt="Chart" sx={{ mr: -2.5, mb: -2.5, width: 124 }} />
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item md={8}>
                      <Box
                        sx={{
                          p: 4,
                          '& .MuiList-root': { pb: 0 },
                          '& .MuiListSubheader-root': { p: 0, pb: 1.5 },
                          '& .MuiListItemButton-root': {
                            p: 0.5,
                            '&:hover': { bgcolor: 'transparent', '& .MuiTypography-root': { color: 'primary.main' } }
                          }
                        }}
                      >
                        <Grid container spacing={6}>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="text.primary">
                                    Authentication
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/login">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="text.primary">
                                    Other Pages
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="About us" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="text.primary">
                                    SAAS Pages
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/maintenance/404">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="404 Error" />
                              </ListItemButton>
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
