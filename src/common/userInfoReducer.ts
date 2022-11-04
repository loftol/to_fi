/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface UserDataType {
  id: string | null;
}

const initialState: UserDataType = {
  id: null,
};

const dataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.id = action.payload.id;
    },
  },
});

export {UserDataType};
export const {setUserData} = dataSlice.actions;

export default dataSlice.reducer;
