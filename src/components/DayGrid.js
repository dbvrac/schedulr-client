import React from "react";
import DayList from "./DayList";

const DayGrid = props => {
  const { preference } = props;
  return (
    <div
      style={{
        height: "600px",
        width: "400px",
        overflowY: "scroll",
        overflowX: "hidden"
      }}
    >
      <div class="ui top attached three item inverted menu">
        <a class="item">&lt; Back</a>
        <a class="item">Today</a>
        <a class="item">Forward ></a>
      </div>

      <DayList startTime={preference.startTime} endTime={preference.endTime} />

      <div class="ui bottom attached inverted segment">Do I need this?</div>
    </div>
  );
};

export default DayGrid;
