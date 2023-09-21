import Header from "../../components/Admin/Header/Header";
import Menu from "../../components/Admin/Menu/Menu";
import Footer from "../../components/Admin/Footer/Footer";
import PrivateRoutes from "../../components/Private/PrivateRoutes";
import AdminRouter from "../../routers/AdminRouter";
import './index.scss'

const Admin = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <AdminRouter/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
