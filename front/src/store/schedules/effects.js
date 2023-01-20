import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem } from "./actions";
import { formatSchedule } from "../../services/schedule";
import { post, get, deleteRequest } from "../../services/api";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());

  const result = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedule = result.map(r => formatSchedule(r));

  dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncSchedulesAddItem = schedule => async dispatch => {
  dispatch(schedulesSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const result = await post("schedules", body);

  const newSchedule = formatSchedule(result);
  dispatch(schedulesAddItem(newSchedule));
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedules = getState().schedules.items;
  await deleteRequest(`schedules/${id}`);
  const newSchedules = currentSchedules.filter(s => s.id !== id);
  dispatch(schedulesDeleteItem(newSchedules));
};