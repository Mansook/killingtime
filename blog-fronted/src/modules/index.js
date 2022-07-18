import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { authSaga } from "./slices/auth";
import authReducer from "./slices/auth";
import loadReducer from "./slices/loading";
import userReducer, { userSaga } from "./slices/user";
import { writeSaga } from "./slices/write";
const rootReducer = combineReducers({});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga()]);
}
export default rootReducer;
