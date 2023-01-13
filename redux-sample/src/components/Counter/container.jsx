import Counter from "./presentation";
import { increment, decrement } from "../../redux/count/actions";
import { connect } from "react-redux";

const mapStateProps = ({count})=> ({count})
const mapDispatchProps = dispatch => ({
    increment: count=>  dispatch(increment(count)),
    decrement: count => dispatch(decrement(count))
})
export default connect(mapStateProps, mapDispatchProps)(Counter);
