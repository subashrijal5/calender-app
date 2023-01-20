import { connect } from "react-redux";
import { createCalender } from "../../services/calender";
import CalenderBoard from "./presentation";

const mapStateProps = (state) => ({ calender: state.calender });
const mergeProps = (stateProps, dispatchProps) => ({
  month: stateProps.calender,
  calender: createCalender(stateProps.calender)
});

export default connect(mapStateProps, null, mergeProps)(CalenderBoard);