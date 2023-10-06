import Chemins from "../../routers/Chemins";
import Grids from "./Grids/Grids";
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Footer from "./Footer/Footer";
import FormField from "../Pages/Form/Form";
import useButtonContext from "../../hooks/useButtonContext";

const Layout = () => {
  const { show } = useButtonContext();

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
