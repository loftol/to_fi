import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  openedMenu: -1,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open(state, action) {},
    close(state, action) {},
  },
});
