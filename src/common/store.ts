import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isMenuOpenReducer} from './isMenuOpenReducer';
import {isReviewOpenReducer} from './isReviewOpenReducer';
import infoOpenedReducer from './infoOpened';
import toiletDataReducer from './toiletDataReducer';

const rootReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
  isReviewOpen: isReviewOpenReducer,
  infoOpened: infoOpenedReducer,
  toiletData: toiletDataReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
