import { Route, Routes } from 'react-router-dom';
// import Login from "../components/Login/Login";
// import Signup from "../components/Singup/Signup";
import Page from '../components/Page/Page';

const Chemins = () => {
  return (
    <Routes>
      <Route path='/page/fenetre' element={<Page />} />
      <Route path='/page/habillage' element={<Page />} />
    </Routes>
  );
};

export default Chemins;
