import Header from "../../components/Admin/Header/Header";
import Menu from "../../components/Admin/Menu/Menu";
import Footer from "../../components/Admin/Footer/Footer";
import AdminRouter from "../../routers/AdminRouter";
import "./index.scss";
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAdminContext from "../../hooks/useAdminContext";

const Admin = () => {
  const privateAxios = useAxiosPrivate();
  const { setData, open, setTop, SetNbUser, SetNbProd } = useAdminContext();

  useEffect(() => {
    fetchData();
  }, [open]);

  const fetchData = async () => {
    try {
      const res = await privateAxios.get("/auth");
      setData(res.data);
      const resTop = await privateAxios.post("/traker/top", { year: 2023 });
      setTop(resTop.data);
      const nbrUser = await privateAxios.post("/auth/nbr", { year: 2023 })
      SetNbUser(nbrUser.data)
      const nbrProd = await privateAxios.post("/traker/nbrProd", { year: 2023 })
      SetNbProd(nbrProd.data)

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
