import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";

const Layout = () => {
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
