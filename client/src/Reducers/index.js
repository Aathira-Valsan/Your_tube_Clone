import { combineReducers } from "redux";
import authreducers from "./auth";
import currentuserreducer from "./currentuser";
import chanelreducer from "./chanel";
import videoreducer from "./video";
import commentreducer from "./comment";
import historyreducer from "./history";
import likedvideoreducer from "./likedvideo";
import watchlaterreducer from "./watchlater";

export default combineReducers({
  authreducers,
  currentuserreducer,
  chanelreducer,
  videoreducer,
  commentreducer,
  historyreducer,
  likedvideoreducer,
  watchlaterreducer

});
