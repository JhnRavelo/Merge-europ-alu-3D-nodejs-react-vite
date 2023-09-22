import './BigBarChart.scss'
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
  } from "recharts";
  import propTypes from 'prop-types'
  
  
  const BigChartBox = (props) => {
    return (
      <div className="bigChartBox">
        <h1>Total Visite</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <XAxis dataKey="name" />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  };

BigChartBox.propTypes = {
    chartData: propTypes.any,
    dataKey: propTypes.string,
    color: propTypes.string
}
  
  export default BigChartBox;
  