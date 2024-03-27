// features/menu/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Определите начальное состояние
const initialState = {
  menuIcon: false
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // Экшен для переключения состояния `menuIcon`
    toggleMenuIcon: (state, action) => {
      state.menuIcon = action.payload;
    },
    // Экшен для установки состояния `menuIcon` в false
    closeMenuIcon: (state, action) => {
      state.menuIcon = action.payload;
    },
  },
});

// Экспортируем экшены
export const { toggleMenuIcon, closeMenuIcon } = menuSlice.actions;

// Экспортируем редьюсер
export default menuSlice.reducer;
