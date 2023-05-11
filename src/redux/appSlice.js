import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  user: null,
  theme: 'light'
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, decremlogoutent, changeTheme } = appSlice.actions

export default appSlice.reducer