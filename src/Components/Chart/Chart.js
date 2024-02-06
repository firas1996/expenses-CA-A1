import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ chartData }) => {
  let values = chartData.map((item) => item.value);
  const max = Math.max(...values);
  const total = values.reduce((x, y) => {
    return x + y;
  });
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
