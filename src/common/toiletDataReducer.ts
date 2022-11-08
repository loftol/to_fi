/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import localInfo from '../../localInfo';

interface ReviewData {
  id: string;
  content: string;
  // eslint-disable-next-line camelcase
  user_id: string;
}

interface ToiletData {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviews: Array<ReviewData>;
}

interface stateType {
  datas: Array<ToiletData>;
}

const addData = createAsyncThunk(
  'toiletData/addData',
  async (toiletId: string, thunkAPI) => {
    const newData = await axios
      .get(`${localInfo.hostIp}/info/${toiletId}`)
      .then(result => JSON.parse(result.data)[0])
      .catch(err => {
        console.log(err);
      });
    const reviews = await axios
      .get(`${localInfo.hostIp}/review/${toiletId}`)
      .then(result => JSON.parse(result.data))
      .catch(err => {
        console.log(err);
      });
    return {...newData, reviews, id: toiletId};
  },
);

const updateReview = createAsyncThunk(
  'toiletData/updateReview',
  async (toiletId: string, thunkAPI) => {
    const reviews = await axios
      .get(`${localInfo.hostIp}/review/${toiletId}`)
      .then(result => JSON.parse(result.data))
      .catch(err => {
        console.log(err);
      });
    const newRating = await axios
      .get(`${localInfo.hostIp}/rating/${toiletId}`)
      .then(result => JSON.parse(result.data))
      .catch(err => {
        console.log(err);
      });
    return {reviews, newRating, id: toiletId};
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
        name: action.payload.name,
        rating: action.payload.rating,
        address: action.payload.road_address
          ? action.payload.road_address
          : action.payload.parcel_address,
        reviews: [...action.payload.reviews],
      };
      if (state.datas.find(data => newToilet.id === data.id)) return;
      state.datas.unshift(newToilet);
      if (state.datas.length > 5) state.datas.pop();
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      const idx = state.datas.findIndex(data => data.id === action.payload.id);
      state.datas[idx].reviews = action.payload.reviews;
      state.datas[idx].rating = action.payload.newRating;
    });
  },
});

export {ReviewData, ToiletData};
export const {deleteData} = dataSlice.actions;
export {addData, updateReview};

export default dataSlice.reducer;
