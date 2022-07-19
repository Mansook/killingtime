import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { authSaga } from "./slices/auth";
import authReducer from "./slices/auth";
import loadReducer from "./slices/loading";
import userReducer, { userSaga } from "./slices/user";
import { writeSaga } from "./slices/write";
import { readSaga } from "./slices/post";
import { postsSaga } from "./slices/posts";

const rootReducer = combineReducers({});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), readSaga(), postsSaga()]);
}
export default rootReducer;
