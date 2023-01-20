import Navigation from "./presentation";

import { connect } from "react-redux";
import { calenderSetMonth } from "../../store/calender/action";
import {  formatMonth, getMonth, getNextMonth, getPreviousMonth } from "../../services/calender";
import { asyncSchedulesFetchItem } from "../../store/schedules/effects";

const mapStateToProps = state => ({ calender: state.calender });

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calenderSetMonth(month));
  },
  fetchItem: month => {
    dispatch(asyncSchedulesFetchItem(month));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calender),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calender);
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calender);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: dayObj => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);