/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  infoOpened: false,
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    openInfo(state, action) {
      state.infoOpened = true;
    },
    closeInfo(state, action) {
      state.infoOpened = false;
    },
  },
});

export const {openInfo, closeInfo} = infoSlice.actions;
export default infoSlice.reducer;
