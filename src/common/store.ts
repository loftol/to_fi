import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isReviewOpenReducer} from './isReviewOpenReducer';
import infoOpenedReducer from './infoOpened';
import toiletDataReducer from './toiletDataReducer';
import searchValueReducer from './searchReducer';

const rootReducer = combineReducers({
  isReviewOpen: isReviewOpenReducer,
  infoOpened: infoOpenedReducer,
  toiletData: toiletDataReducer,
  searchValue: searchValueReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
