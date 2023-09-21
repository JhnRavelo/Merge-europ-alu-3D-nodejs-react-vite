import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <div className="corps">
        <Header />
        <Grids />
        <Chemins />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
