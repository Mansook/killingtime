import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    register: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    login: {
      username: "",
      password: "",
    },
    auth: null,
    authError: null,
  },

  reducers: {
    changefile: (state, action) => {
      const { form, key, value } = action.payload;
      if (form === "login") {
        if (key === "username") {
          state.login.username = value;
        } else {
          state.login.password = value;
        }
      } else if (form === "register") {
        if (key === "username") {
          state.register.username = value;
        } else if (key === "password") {
          state.register.password = value;
        } else {
          state.register.passwordConfirm = value;
        }
      }
    },
    initializeform: (state, action) => {},

    registersuccess: (state, action) => {},
  },
});
export const { changefile, initializeform } = authSlice.actions;
export default authSlice.reducer;
export const selectAuth = (state) => state.auth;
export const selectReg = (state) => state.auth.register;
export const selectLog = (state) => state.auth.login;
