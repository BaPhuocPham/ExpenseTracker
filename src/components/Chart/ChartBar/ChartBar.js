import React from "react";
import "./ChartBar.css";

export const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
    console.log(barFillHeight);
  }
  return (
    <div>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
