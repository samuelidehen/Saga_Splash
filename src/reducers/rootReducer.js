import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import imageReducer from "./imageReducer";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
  isloading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statsReducer,
});

export default rootReducer;
