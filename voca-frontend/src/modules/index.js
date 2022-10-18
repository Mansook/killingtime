import { all } from "redux-saga/effects";
import { booklistSaga } from "./slices/booklist";
import { addModalSaga } from "./slices/modal";
import { TestSaga } from "./slices/test";
import { TestListSaga } from "./slices/testlist";
import { readBookSaga } from "./slices/wordlist";

export function* rootSaga() {
  yield all([
    booklistSaga(),
    addModalSaga(),
    readBookSaga(),
    TestSaga(),
    TestListSaga(),
  ]);
}
