import { Route, Routes } from "react-router-dom";
import Page from "../pages/Page/Page";
import ProfilPage from "../pages/Profil/ProfilPage";
import Error from "../pages/Error/Error";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import "dotenv";
import Admin from "../pages/Admin";

const prime = import.meta.env.VITE_PRIME.split(" ");

const Chemins = () => {
  return (
    <Routes>
      <Route path="/page/fenetre" element={<Page />} />
      <Route path="/page/habillage" element={<Page />} />

      {/* <Route element={<PrivateRoutes prime={prime[2]} />}> */}
        <Route path="/page/profile" element={<ProfilPage />} />
      {/* </Route> */}

      {/* <Route element={<PrivateRoutes prime={prime[0]} />}> */}
        <Route path="/admin" element={<Admin />} />
      {/* </Route> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Chemins;
