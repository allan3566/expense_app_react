import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: "first",
  password: null,
  login: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setPassword, setLogin, setError } = userSlice.actions;

export const selectUser = (state) => state.users;
export const selectLogin = (state) => state.users.password;

export default userSlice.reducer;
