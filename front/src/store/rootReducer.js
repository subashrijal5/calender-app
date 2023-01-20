import { combineReducers } from "redux";
import addScheduleReducer from "./addSchedule/reducer";
import calenderReducer from "./calender/reducer";

const rootReducer = combineReducers({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
});

export default rootReducer;
