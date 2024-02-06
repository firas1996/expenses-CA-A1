import React from "react";
import Chart from "./Chart";

const ChartData = ({ expenses }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of expenses) {
    chartData[item.date.getMonth()].value += item.price;
  }
  return <Chart chartData={chartData} />;
};

export default ChartData;
