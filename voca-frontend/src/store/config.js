import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../modules";
import loadReducer from "../modules/slices/loading";
import listReducer from "../modules/slices/booklist";
import modalReducer from "../modules/slices/modal";
import bookReducer from "../modules/slices/wordlist";
import testlistReducer from "../modules/slices/testlist";
import testReducer from "../modules/slices/test";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    load: loadReducer,
    list: listReducer,
    modal: modalReducer,
    book: bookReducer,
    testlist: testlistReducer,
    test: testReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
