import { Link } from "react-router-dom";
import "./ChartBox.scss";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartBox = () => {
  const data = {};
  return (
    <div className="charBox">
      <div className="boxInfo">
        <div className="title">
          <img src="" alt="" />
          <span>{"Total d'Utilisateur"}</span>
        </div>
        <h1>20000</h1>
        <Link to="/user">Visionner</Link>
      </div>
      <div className="chatInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">30%</span>
          <span className="duration">Ce mois</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
