import { combineReducers } from "redux";
import calenderReducer from "./calender/reducer";

const rootReducer = combineReducers({calender :calenderReducer });

export default rootReducer;
