import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import FormField from "../Pages/Form/Form";
import useButtonContext from "../../hooks/useButtonContext";
import { useEffect } from "react";
import ProductContext from "../Pages/Products/ProductContext";
import defaultAxios from "../../api/axios";

const Layout = () => {
  const { show } = useButtonContext();
  // const location = useLocation();
  // const handleIndex = () => {
  //   var index;
  //   if (location.pathname == "/page/habillage") {
  //     index = 1;
  //   } else if (location.pathname == "/page/fenetre") {
  //     index = 0;
  //   }
  //   return index;
  // };
  // const [index, setInddex] = useState(() => {
  //   return handleIndex();
  // });


  // useEffect(() => {
  //   if (location.pathname == "/page/habillage") {
  //     setInddex(1);
  //   } else if (location.pathname == "/page/fenetre") {
  //     setInddex(0);
  //   }
  // }, [location]);

  return (
    <>
      <ScrollToTop />
      {/* <ProductContext.Provider value={{ data , dataPage}}> */}
        <div className="corps">
          <Header />
          <Grids />
          <Chemins />
          <Footer />
        </div>
        {show && <FormField />}
      {/* </ProductContext.Provider> */}
    </>
  );
};

export default Layout;
