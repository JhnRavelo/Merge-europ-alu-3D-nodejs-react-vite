import Header from "../../components/Admin/Header/Header";
import Menu from "../../components/Admin/Menu/Menu";
import Footer from "../../components/Admin/Footer/Footer";
import AdminRouter from "../../routers/AdminRouter";
import "./index.scss";
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAdminContext from "../../hooks/useAdminContext";
import useButtonContext from "../../hooks/useButtonContext";

const Admin = () => {
  const privateAxios = useAxiosPrivate();
  const {
    setData,
    open,
    setTop,
    SetNbUser,
    SetNbProd,
    setOrder,
    setUser,
    deleteOpen,
    setCommercial,
    notifOpen,
    year,
    setYears,
    setLog,
    connect,
    setConnect,
    logout,
    setLogout,
  } = useAdminContext();
  const { socket } = useButtonContext();

  useEffect(() => {
    fetchData();
  }, [open, deleteOpen, year, notifOpen, connect, logout]);

  useEffect(() => {
    if (socket) {
      socket.on("receiveConnectUser", (data) => {
        console.log(data);
        setConnect(data);
      });
      socket.on("receiveLogoutUser", (data) => {
        setLogout(data);
      });
    }
  }, [socket]);

  const fetchData = async () => {
    try {
      const res = await privateAxios.get("/auth");
      setData(res.data);
      const order = await privateAxios.get("/traker/all");
      setOrder(order.data);
      const user = await privateAxios.get("/auth/getUsers");
      setUser(user.data);
      const commercial = await privateAxios.get("/auth/getCommercials");
      setCommercial(commercial.data);
      const resTop = await privateAxios.post("/traker/top", { year: year });
      setTop(resTop.data);
      const nbrUser = await privateAxios.post("/auth/nbr", { year: year });
      SetNbUser(nbrUser.data);
      const nbrProd = await privateAxios.post("/traker/nbrProd", {
        year: year,
      });
      SetNbProd(nbrProd.data);
      setYears(nbrProd.data.getYear);
      if (notifOpen == false) {
        const log = await privateAxios.post("/log", { year: year });
        setLog(log.data);
      }
      if (notifOpen == true) {
        await privateAxios.get("/log");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="containerAdmin">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <AdminRouter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
