import { createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects"; //액션 감지
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as authAPI from "../../lib/api/auth";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/register");
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/login");

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(register, registerSaga);
  yield takeLatest(login, loginSaga);
}
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
    register: (state, action) => {},
    login: (state, action) => {},

    registersuccess: (state, action) => ({
      ...state,
      authError: null,
      auth: action.payload,
    }),

    registerfailure: (state, action) => ({
      ...state,
      authError: true,
    }),

    loginsuccess: (state, action) => ({
      ...state,
      authError: null,
      auth: action.payload,
    }),
    loginfailure: (state, action) => ({
      ...state,
      authError: true,
    }),
  },
});
export const {
  changefile,
  initializeform,
  register,
  login,
  registersuccess,
  registerfailure,
  loginsuccess,
  loginfailure,
} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectReg = (state) => state.auth.register;
export const selectLog = (state) => state.auth.login;
export default authSlice.reducer;
