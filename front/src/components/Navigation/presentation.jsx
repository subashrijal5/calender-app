import {
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  Tooltip,
} from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 },
})(DatePicker);

const Navigation = ({ setPreviousMonth, setNextMonth, setMonth, month }) => {
  return (
    <Toolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <Typography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </Typography>
      <Tooltip title="前の月" placement="bottom">
        <IconButton size="small" onClick={setPreviousMonth}>
          <ArrowBackIos />
        </IconButton>
      </Tooltip>
      <Tooltip title="次の月" placement="bottom">
        <IconButton size="small" onClick={setNextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
      <StyledDatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </Toolbar>
  );
};
export default Navigation;
