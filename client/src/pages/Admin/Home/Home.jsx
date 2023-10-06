import ChartBox from "../../../components/Admin/ChartBox/ChartBox";
import TopProduct from "../../../components/Admin/TopProduct/TopProduct";
import "./Home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  barChartBoxVisit,
} from "../../../assets/js/data";
import BigChartBox from "../../../components/Admin/BigBarChart/BigBarChart";
import PieChartBox from "../../../components/Admin/ChartPie/ChartPie";
import useAdminContext from "../../../hooks/useAdminContext";
import { useEffect, useState } from "react";

const Home = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [chartDataUser, setChartDataUser] = useState([
    { name: "Jan", users: 0, number: 1 },
    { name: "Feb", users: 0, number: 2 },
    { name: "Mar", users: 0, number: 3 },
    { name: "Apr", users: 0, number: 4 },
    { name: "May", users: 0, number: 5 },
    { name: "Jun", users: 0, number: 6 },
    { name: "Jul", users: 0, number: 7 },
    { name: "Aug", users: 0, number: 8 },
    { name: "Sep", users: 0, number: 9 },
    { name: "Oct", users: 0, number: 10 },
    { name: "Nov", users: 0, number: 11 },
    { name: "Dec", users: 0, number: 12 },
  ]);
  const [percUser, setPercUser] = useState(0);
  const { nbUser } = useAdminContext();

  useEffect(() => {
    if (nbUser) {
      setTotalUser(nbUser.countUser[0].userCount);
      console.log(nbUser.countUserByMonthByYear[0]);
      setChartDataUser((prevState) => {
        const newState = prevState.map((prev) => {
          const matchingNb = nbUser.countUserByMonthByYear.find(
            (nb) => nb.month === prev.number
          );
          if (matchingNb) {
            return { ...prev, users: matchingNb.count };
          } else {
            return prev;
          }
        });

        return newState;
      });

      setPercUser(() => {
        const date = new Date();
        const Lastmonth = date.getMonth();
        const Thismonth = Lastmonth + 1;
        const findThisMonth = nbUser.countUserByMonthByYear.find(
          (nb) => nb.month === Thismonth
        );
        const findLastMonth = nbUser.countUserByMonthByYear.find(
          (nb) => nb.month === Lastmonth
        );
        const percentageUser = Math.floor(
          ((findThisMonth.count - findLastMonth.count) / findLastMonth.count) *
            100
        );
        return percentageUser;
      });
    }
  }, [nbUser]);

  return (
    <div className="home">
      <div className="box box1">
        <TopProduct />
      </div>
      <div className="box box2">
        <ChartBox
          {...chartBoxUser}
          url={"/admin/user"}
          number={totalUser}
          chartData={chartDataUser}
          percentage={percUser}
        />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} url={"/admin/product"} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box7">
        <BigChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
