import { Route, Routes } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Layout from "../components/Layout/Layout";
import Admin from "../pages/Admin";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import Error from "../pages/Error/Error";

// import ModalDeleteButton from "../components/Admin/ModalDelete/ModalDeleteButton";
import ModalDelete from "../components/Admin/ModalDelete/ModalDelete";

const prime = import.meta.env.VITE_PRIME.split(" ");

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/modal" element={<ModalDelete />} />
      <Route path="/" element={<Acceuil />} />
      <Route path="/page/*" element={<Layout />} />
      {/* <Route element={<PrivateRoutes prime={prime[2]} />}> */}
        <Route path="/admin/*" element={<Admin />} />
      {/* </Route> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
