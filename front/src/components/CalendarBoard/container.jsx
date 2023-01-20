import { connect } from "react-redux";
import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../store/addSchedule/actions";

const mapStateProps = (state) => ({ calender: state.calender });

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog(d));

    dispatch(addScheduleSetValue({ date: d }));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calender,
  calender: createCalender(stateProps.calender)
});

export default connect(mapStateProps, mapDispatchToProps, mergeProps)(CalenderBoard);