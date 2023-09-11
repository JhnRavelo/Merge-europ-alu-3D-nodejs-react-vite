import { Route, Routes } from 'react-router-dom';
import Page from '../components/Page/Page';
import ProfilPage from '../components/ProfilPage/ProfilPage';

const Chemins = () => {
  return (
    <Routes>
      <Route path='/page/fenetre' element={<Page />} />
      <Route path='/page/habillage' element={<Page />} />
      <Route path='/page/profile' element={<ProfilPage />} />
    </Routes>
  );
};

export default Chemins;
