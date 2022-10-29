import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isReviewOpenReducer} from './isReviewOpenReducer';
import infoOpenedReducer from './infoOpened';
import toiletDataReducer from './toiletDataReducer';
import searchValueReducer from './searchReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  isReviewOpen: isReviewOpenReducer,
  infoOpened: infoOpenedReducer,
  toiletData: toiletDataReducer,
  searchValue: searchValueReducer,
  menu: menuReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
