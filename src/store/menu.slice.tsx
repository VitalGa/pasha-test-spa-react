import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIcon: false,
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

export const { toggleMenuIcon, closeMenuIcon } = menuSlice.actions;

export default menuSlice.reducer;
