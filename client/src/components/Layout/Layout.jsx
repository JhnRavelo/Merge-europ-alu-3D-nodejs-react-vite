import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import FormField from "../Pages/Form/Form";
import useButtonContext from "../../hooks/useButtonContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect } from "react";

const Layout = () => {
  const { show, setBody, setDataPage } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchData();
  }, [show]);

  const fetchData = async () => {
    try {
      const res = await axiosPrivate.get("/auth");
      if (res.data) {
        setBody({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
        });
        const page = await axiosPrivate.get("/traker");
        if (page.data != "No Page") {
          setDataPage(page.data);
        }
      } else {
        setBody({
          name: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      if (error) {
        setBody({
          name: "",
          email: "",
          phone: "",
        });
        console.log(error);
      }
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="corps">
        <Header />
        <Grids />
        <Chemins />
        <Footer />
      </div>
      {show && <FormField />}
    </>
  );
};

export default Layout;
