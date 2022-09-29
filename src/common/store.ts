import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isMenuOpenReducer} from './isMenuOpenReducer';
import {toiletIdReducer} from './toiletIdReducer';

const rootReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
  toiletId: toiletIdReducer,
});
const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
