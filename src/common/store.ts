import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isMenuOpenReducer} from './isMenuOpenReducer';
import {toiletIdReducer} from './toiletIdReducer';
import {isReviewOpenReducer} from './isReviewOpenReducer';

const rootReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
  toiletId: toiletIdReducer,
  isReviewOpen: isReviewOpenReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
