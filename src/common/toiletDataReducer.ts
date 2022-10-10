/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface ReviewData {
  id: number;
  name: string;
  main: string;
}

interface ToiletData {
  id: number;
  name: string;
  address: string;
  review: Array<ReviewData>;
}

interface stateType {
  datas: Array<ToiletData>;
}

const addData = createAsyncThunk(
  'toiletData/addData',
  async (toiletId: number, thunkAPI) => {
    console.log(toiletId);
    const newData = JSON.parse(
      (await axios.get(`http://172.30.1.73:3000/info/${toiletId}`)).data,
    );
    return newData;
  },
);

const initialState: stateType = {
  datas: [],
};

const dataSlice = createSlice({
  name: 'toiletData',
  initialState,
  reducers: {
    deleteData(state, action) {
      //  action.payload = toilet ID to delete
    },
  },
  extraReducers: builder => {
    builder.addCase(addData.fulfilled, (state, action) => {
      state.datas.unshift(action.payload);
      if (state.datas.length > 5) state.datas.pop();
    });
  },
});

export {ReviewData, ToiletData};
export const {deleteData} = dataSlice.actions;
export {addData};

export default dataSlice.reducer;
