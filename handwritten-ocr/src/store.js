import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Create a root reducer that combines all your reducers
const rootReducer = {
  auth: authSlice.reducer,
  // Add other reducers here if you have any
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
