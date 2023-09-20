import { Route, Routes } from "react-router-dom";
import Page from "../components/Page/Page";
import ProfilPage from "../components/ProfilPage/ProfilPage";
import Error from "../components/Error/Error";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import 'dotenv'

const prime = import.meta.env.VITE_PRIME.split(' ');

const Chemins = () => {
  
  return (
    <Routes>
      <Route path="/page/fenetre" element={<Page />} />
      <Route path="/page/habillage" element={<Page />} />

      <Route element={<PrivateRoutes prime={prime[2]} />}>
        <Route path="/page/profile" element={<ProfilPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Chemins;
