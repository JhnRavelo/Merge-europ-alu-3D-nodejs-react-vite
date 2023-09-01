import { Route, Routes } from "react-router-dom";

import Login from "../components/Login/Login";
import Signup from "../components/Singup/Signup";

const Chemins = () => {
  return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    )

}

export default Chemins