import dayjs from "dayjs";
import CALENDAR_SET_MONTH from './action'
const day = dayjs();

const initialState = {
  year: day.year(),
  month: day.month() + 1,
};

const calenderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calenderReducer;
