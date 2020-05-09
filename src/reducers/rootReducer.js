import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import imageReducer from "./imageReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  isloading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: pageReducer,
});

export default rootReducer;
