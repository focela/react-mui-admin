import { MenuProps } from '~/types/menu';
import { createSlice } from '@reduxjs/toolkit';

const initialState: MenuProps = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  selectedID: null,
  drawerOpen: true,
  componentDrawerOpen: true,
  menu: {},
  error: null
};

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    }
  }
});

export default slice.reducer;

export const { activeItem, openDrawer, activeID } = slice.actions;
