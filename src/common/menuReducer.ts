import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  openedMenu: 0,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});
