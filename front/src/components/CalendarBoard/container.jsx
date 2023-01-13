import { connect } from "react-redux";
import CalendarBoard from "./presentation";

const mapStateProps = (state) => ({ calender: state.calender });

export default connect(mapStateProps)(CalendarBoard);
