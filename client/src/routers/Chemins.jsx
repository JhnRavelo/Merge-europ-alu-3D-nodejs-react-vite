import { Link, Route, Routes } from "react-router-dom";
import Page from "../pages/Page/Page";
import ProfilPage from "../pages/Profil/ProfilPage";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import { useContext } from "react";
import ProductContext from "../components/Pages/Products/ProductContext";

const prime = import.meta.env.VITE_PRIME.split(" ");

const Chemins = () => {
  // const path = useContext(ProductContext);

  return (
    <Routes>

      <Route path="/:id" element={<Page />} />
      {/* <Route element={<PrivateRoutes prime={prime[2]} />}> */}
      <Route path="/profile" element={<ProfilPage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default Chemins;
