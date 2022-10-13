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
    const newData = await axios
      .get(`http://192.168.0.102:3000/info/${toiletId}`)
      .then(fileData => JSON.parse(fileData.data))
      .catch(err => console.log(err));
    return {...newData, id: toiletId};
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
      state.datas = state.datas.filter(data => data.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(addData.fulfilled, (state, action) => {
      const newToilet = {
        id: action.payload.id,
        name: action.payload['화장실명'],
        address: action.payload['소재지도로명주소']
          ? action.payload['소재지도로명주소']
          : action.payload['소재지지번주소'],
        review: [],
      };
      state.datas.unshift(newToilet);
      if (state.datas.length > 5) state.datas.pop();
    });
  },
});

export {ReviewData, ToiletData};
export const {deleteData} = dataSlice.actions;
export {addData};

export default dataSlice.reducer;
