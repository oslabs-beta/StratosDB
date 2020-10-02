import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({main: reducer})

export default reducers;

