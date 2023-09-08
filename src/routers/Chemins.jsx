import { Route, Routes } from 'react-router-dom';
import Page from '../components/Page/Page';
import ProfilPage from "../components/ProfilPage/ProfilPage";
import FormField from '../components/Form/Form';

const Chemins = () => {
  return (
<Routes>
      <Route path='/page/fenetre' element={<Page />} />
      <Route path='/page/habillage' element={<Page />} />
      <Route path="/page/profile" element={<ProfilPage/>} />
      <Route path='/page/form' element={<FormField/>} />
    </Routes>
  );
};

export default Chemins;
