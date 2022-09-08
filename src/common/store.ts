import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {isMenuOpenReducer} from './state';

const rootReducer = combineReducers({
  isMenuOpen: isMenuOpenReducer,
});
const store = configureStore({reducer: rootReducer});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
