import { Theme } from '@mui/material/styles';
import { merge } from 'lodash';
import Accordion from '~/themes/overrides/Accordion';
import AccordionDetails from '~/themes/overrides/AccordionDetails';
import AccordionSummary from '~/themes/overrides/AccordionSummary';
import Alert from '~/themes/overrides/Alert';
import AlertTitle from '~/themes/overrides/AlertTitle';
import Autocomplete from '~/themes/overrides/Autocomplete';
import Badge from '~/themes/overrides/Badge';
import Button from '~/themes/overrides/Button';
import ButtonBase from '~/themes/overrides/ButtonBase';
import ButtonGroup from '~/themes/overrides/ButtonGroup';
import CardContent from '~/themes/overrides/CardContent';
import Checkbox from '~/themes/overrides/Checkbox';
import Chip from '~/themes/overrides/Chip';
import Dialog from '~/themes/overrides/Dialog';
import DialogContentText from '~/themes/overrides/DialogContentText';
import DialogTitle from '~/themes/overrides/DialogTitle';
import Fab from '~/themes/overrides/Fab';
import FormHelperText from '~/themes/overrides/FormHelperText';
import IconButton from '~/themes/overrides/IconButton';
import InputBase from '~/themes/overrides/InputBase';
import InputLabel from '~/themes/overrides/InputLabel';
import LinearProgress from '~/themes/overrides/LinearProgress';
import Link from '~/themes/overrides/Link';
import ListItemButton from '~/themes/overrides/ListItemButton';
import ListItemIcon from '~/themes/overrides/ListItemIcon';
import LoadingButton from '~/themes/overrides/LoadingButton';
import OutlinedInput from '~/themes/overrides/OutlinedInput';
import Pagination from '~/themes/overrides/Pagination';
import PaginationItem from '~/themes/overrides/PaginationItem';
import Popover from '~/themes/overrides/Popover';
import Radio from '~/themes/overrides/Radio';
import Slider from '~/themes/overrides/Slider';
import Switch from '~/themes/overrides/Switch';
import Tab from '~/themes/overrides/Tab';
import TableBody from '~/themes/overrides/TableBody';
import TableCell from '~/themes/overrides/TableCell';
import TableFooter from '~/themes/overrides/TableFooter';
import TableHead from '~/themes/overrides/TableHead';
import TablePagination from '~/themes/overrides/TablePagination';
import TableRow from '~/themes/overrides/TableRow';
import Tabs from '~/themes/overrides/Tabs';
import ToggleButton from '~/themes/overrides/ToggleButton';
import Tooltip from '~/themes/overrides/Tooltip';
import TreeItem from '~/themes/overrides/TreeItem';
import Typography from '~/themes/overrides/Typography';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Accordion(theme),
    AccordionDetails(theme),
    AccordionSummary(theme),
    Alert(theme),
    AlertTitle(),
    Autocomplete(),
    Badge(theme),
    Button(theme),
    ButtonBase(),
    ButtonGroup(),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    Dialog(),
    DialogContentText(theme),
    DialogTitle(),
    Fab(theme),
    FormHelperText(),
    IconButton(theme),
    InputBase(),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemButton(theme),
    ListItemIcon(theme),
    LoadingButton(),
    OutlinedInput(theme),
    Pagination(),
    PaginationItem(theme),
    Popover(theme),
    Radio(theme),
    Slider(theme),
    Switch(theme),
    Tab(theme),
    TableBody(theme),
    TableCell(theme),
    TableFooter(theme),
    TableHead(theme),
    TablePagination(),
    TableRow(),
    Tabs(),
    ToggleButton(theme),
    Tooltip(theme),
    TreeItem(),
    Typography()
  );
}
