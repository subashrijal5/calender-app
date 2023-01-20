import { combineReducers } from "redux";
import addScheduleReducer from "./addSchedule/reducer";
import calenderReducer from "./calender/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";
import schedulesReducer from "./schedules/reducer";

const rootReducer = combineReducers({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
  currentSchedule: currentScheduleReducer,
});

export default rootReducer;
