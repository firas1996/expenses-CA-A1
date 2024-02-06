import "./ChartBar.css";

const ChartBar = ({ label, value, max, total }) => {
  let fill = "0%";
  fill = Math.round((value / max) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fill }}></div>
      </div>
      <label className="chart-bar__label">{label}</label>
    </div>
  );
};

export default ChartBar;
