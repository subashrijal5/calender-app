import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

import { currentScheduleCloseDialog } from "../../store/currentSchedule/actions";

const mapStateToProps = state => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
