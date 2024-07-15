import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MainCard from '~/components/cards/MainCard';
import IconButton from '~/components/extended/IconButton';
import SimpleBar from '~/components/third-party/SimpleBar';
import useConfig from '~/hooks/useConfig';
import {
  BgColorsOutlined,
  BorderInnerOutlined,
  CloseCircleOutlined,
  FontColorsOutlined,
  HighlightOutlined,
  LayoutOutlined,
  SettingOutlined
} from '@ant-design/icons';
import AnimateButton from '~/components/extended/AnimateButton';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ThemeLayout from '~/layout/MainLayout/Customization/ThemeLayout';
import ThemeMenuLayout from '~/layout/MainLayout/Customization/ThemeMenuLayout';
import ColorScheme from '~/layout/MainLayout/Customization/ColorScheme';
import ThemeWidth from '~/layout/MainLayout/Customization/ThemeWidth';
import ThemeFont from '~/layout/MainLayout/Customization/ThemeFont';
import ThemeMode from '~/layout/MainLayout/Customization/ThemeMode';

export default function Customization() {
  const { mode } = useConfig();

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const iconBackColorOpen = mode === 'dark' ? 'background.default' : 'grey.100';

  const themeLayout = useMemo(() => <ThemeLayout />, []);
  const themeMenuLayout = useMemo(() => <ThemeMenuLayout />, []);
  const themeMode = useMemo(() => <ThemeMode />, []);
  const themeColor = useMemo(() => <ColorScheme />, []);
  const themeWidth = useMemo(() => <ThemeWidth />, []);
  const themeFont = useMemo(() => <ThemeFont />, []);

  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <AnimateButton type="rotate">
          <IconButton
            color="secondary"
            variant="light"
            sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
            onClick={handleToggle}
            aria-label="settings toggler"
          >
            <SettingOutlined />
          </IconButton>
        </AnimateButton>
      </Box>
      <Drawer
        sx={{ zIndex: 2001 }}
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 340
          }
        }}
      >
        {open && (
          <MainCard
            title="Theme Customization"
            sx={{
              border: 'none',
              borderRadius: 0,
              height: '100vh',
              '& .MuiCardHeader-root': {
                color: 'background.paper',
                bgcolor: 'primary.main',
                '& .MuiTypography-root': { fontSize: '1rem' }
              }
            }}
            content={false}
            secondary={
              <IconButton shape="rounded" size="small" onClick={handleToggle} sx={{ color: 'background.paper' }}>
                <CloseCircleOutlined style={{ fontSize: '1.15rem' }} />
              </IconButton>
            }
          >
            <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
              <Box
                sx={{
                  height: 'calc(100vh - 64px)',
                  '& .MuiAccordion-root': {
                    borderColor: 'divider',
                    '& .MuiAccordionSummary-root': { bgcolor: 'transparent', flexDirection: 'row', pl: 1 },
                    '& .MuiAccordionDetails-root': { border: 'none' },
                    '& .Mui-expanded': { color: 'primary.main' }
                  }
                }}
              >
                <Accordion defaultExpanded sx={{ borderTop: 'none' }}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <LayoutOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Theme Layout
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose your layout
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeLayout}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BorderInnerOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Menu Orientation
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose Vertical or Horizontal Menu Orientation
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeMenuLayout}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <HighlightOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Theme Mode
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose light or dark mode
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeMode}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BgColorsOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Color Scheme
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose your primary theme color
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeColor}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <BorderInnerOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Layout Width
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose fluid or container layout
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeWidth}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded sx={{ borderBottom: 'none' }}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton
                        disableRipple
                        color="primary"
                        sx={{ bgcolor: 'primary.lighter' }}
                        onClick={handleToggle}
                        aria-label="settings toggler"
                      >
                        <FontColorsOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="text.primary">
                          Font Family
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Choose your font family.
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{themeFont}</AccordionDetails>
                </Accordion>
              </Box>
            </SimpleBar>
          </MainCard>
        )}
      </Drawer>
    </>
  );
}
