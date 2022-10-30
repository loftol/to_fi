import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isReviewOpenReducer} from './isReviewOpenReducer';
import infoOpenedReducer from './infoOpened';
import toiletDataReducer from './toiletDataReducer';
import searchValueReducer from './searchReducer';
import menuReducer from './menuReducer';
import showStateReducer from './showStateReducer';

const rootReducer = combineReducers({
  isReviewOpen: isReviewOpenReducer,
  infoOpened: infoOpenedReducer,
  toiletData: toiletDataReducer,
  searchValue: searchValueReducer,
  menu: menuReducer,
  showState: showStateReducer,
});

const store = configureStore({reducer: rootReducer});
store.getState();
export default store;
export type RootState = ReturnType<typeof rootReducer>;
