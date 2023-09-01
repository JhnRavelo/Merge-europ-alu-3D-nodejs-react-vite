import { Route, Routes } from "react-router-dom";

import Fenetre from "../pages/Fenetre/Fenetre";
import Porte from "../pages/Porte/Porte";

import Login from "../components/Login/Login";
import Signup from "../components/Singup/Signup";

const Chemins = () => {
  return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/page/fenetre" element={<Fenetre/>} />
            <Route path="/page/porte" element={<Porte/>} />
        </Routes>
    )

}

export default Chemins