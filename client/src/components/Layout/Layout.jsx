import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import FormField from "../Pages/Form/Form";
import { ButtonProvider } from "../../context/ButtonProvider";
import useButtonContext from "../../hooks/useButtonContext";
import { useEffect, useState } from "react";
import ProductContext from "../Pages/Products/ProductContext";

const Layout = () => {
  const { show } = useButtonContext();
  const location = useLocation();
  const handleIndex = () => {
    var index;
    if (location.pathname == "/page/habillage") {
      index = 1;
    } else if (location.pathname == "/page/fenetre") {
      index = 0;
    }
    return index;
  };
  const [index, setInddex] = useState(() => {
    return handleIndex();
  });

  useEffect(() => {
    if (location.pathname == "/page/habillage") {
      setInddex(1);
    } else if (location.pathname == "/page/fenetre") {
      setInddex(0);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {/* <ButtonProvider> */}
        <ProductContext.Provider value={index}>
          <div className="corps">
            <Header />
            <Grids />
            <Chemins />
            <Footer />
          </div>
          {show && <FormField />}
        </ProductContext.Provider>
      {/* </ButtonProvider> */}
    </>
  );
};

export default Layout;
