/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

interface position {
  x: number;
  y: number;
}

interface menuType {
  id: number;
  pos: position;
}

interface stateType {
  isMenuOpen: boolean;
  openedMenu: menuType;
  closed: boolean;
}

const initialState: stateType = {
  isMenuOpen: false,
  openedMenu: {
    id: -1,
    pos: {
      x: 500,
      y: 500,
    },
  },
  closed: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeMenu(state, action) {
      state.openedMenu.id = +action.payload.id;
      state.openedMenu.pos = {x: action.payload.pos.x, y: action.payload.pos.y};
      state.closed = false;
    },
    closeMenu(state) {
      state.closed = true;
    },
  },
});

export const {changeMenu, closeMenu} = menuSlice.actions;
export default menuSlice.reducer;
