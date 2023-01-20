import { connect } from "react-redux";
import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../store/addSchedule/actions";
import { setSchedules } from "../../services/schedule";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog
} from "../../store/currentSchedule/actions";
import { asyncSchedulesFetchItem } from "../../store/schedules/effects";

const mapStateProps = (state) => ({ calender: state.calender,  schedules: state.schedules });

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog(d));

    dispatch(addScheduleSetValue({ date: d }));
    
  },
  openCurrentScheduleDialog: (schedule, e) => {
    e.stopPropagation();
    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
  fetchSchedule: month => {
    dispatch(asyncSchedulesFetchItem(month));
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calender: month,
    schedules: { items: schedules }
  } = stateProps;

  const calender = setSchedules(createCalender(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calender,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    month
  };
};

export default connect(mapStateProps, mapDispatchToProps, mergeProps)(CalenderBoard);