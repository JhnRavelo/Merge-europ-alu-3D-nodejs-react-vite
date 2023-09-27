import { Route, Routes } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Layout from "../components/Layout/Layout";
import Admin from "../pages/Admin";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import Error from "../pages/Error/Error";

import SignupType from "../components/Pages/Singup/SignupType";

const prime = import.meta.env.VITE_PRIME.split(" ");

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/page/*" element={<Layout />} />
      <Route path="/SignupType" element={<SignupType />} />
      {/* <Route element={<PrivateRoutes prime={prime[2]} />}> */}
        <Route path="/admin/*" element={<Admin />} />
      {/* </Route> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
