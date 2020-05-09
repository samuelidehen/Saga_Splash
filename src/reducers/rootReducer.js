import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  isloading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
});

export default rootReducer;
