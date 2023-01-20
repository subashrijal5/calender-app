import dayjs from "dayjs";
import { formatMonth } from "../../services/calender";
import CALENDER_SET_MONTH from './action'
const day = dayjs();

const initialState = formatMonth(day);

const calenderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CALENDER_SET_MONTH':
      return payload;
    default:
      return state;
  }
};

export default calenderReducer;
