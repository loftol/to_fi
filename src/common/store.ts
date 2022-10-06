import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isMenuOpenReducer} from './isMenuOpenReducer';
import {toiletIdReducer} from './toiletIdReducer';
import {isReviewOpenReducer} from './isReviewOpenReducer';
import infoOpenedReducer from './infoOpened';

const rootReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
  toiletId: toiletIdReducer,
  isReviewOpen: isReviewOpenReducer,
  infoOpened: infoOpenedReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
