import { combineReducers } from "redux";
import authReducer from "./slices/auth";
import loadReducer from "./slices/loading";
const rootReducer = combineReducers({
  auth: authReducer,
  load: loadReducer,
});

export default rootReducer;
