import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import React from "react";
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth
} from "../../services/calender";
import Schedule from "../Schedule";

import * as styles from "./style.css";

const CalendarElement = ({ day, month, schedules, ...props }) => {
  
  const format = isFirstDay(day) ? "M月D日" : "D";
  const today = dayjs();

  const isToday = isSameDay(day, today);

  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        color={textColor}
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props}/>
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;
