import dayjs from "dayjs";

export const createCalender = (month) => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

const getMonthStateCreator = (diff) => (month) => {
  const day = getMonth(month).add(diff, "month");
  return formatMonth(day);
};

export const getNextMonth = getMonthStateCreator(1);

export const getPreviousMonth = getMonthStateCreator(-1);

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};
