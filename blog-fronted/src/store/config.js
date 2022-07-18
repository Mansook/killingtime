import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/slices/auth";
import loadReducer from "../modules/slices/loading";
import userReducer from "../modules/slices/user";
import writeReducer from "../modules/slices/write";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../modules";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    load: loadReducer,
    user: userReducer,
    write: writeReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
