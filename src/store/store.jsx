import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu.slice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
