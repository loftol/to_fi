/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

interface stateType {
  searchValue: string;
  searching: boolean;
}

const initialState: stateType = {
  searchValue: '',
  searching: false,
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    sendValue(state, action) {
      state.searchValue = action.payload;
      if (action.payload) state.searching = true;
      else state.searching = false;
    },
  },
});

export const {sendValue} = searchSlice.actions;
export default searchSlice.reducer;
