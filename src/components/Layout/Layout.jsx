import Chemins from '../../routers/Chemins';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Grids from '../Grids/Grids';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
// import FormField from '../Form/Form';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className='corps'>
      <Header />
        <Grids />
        <Chemins />
      <Footer />
      </div>
    </>
  );
};

export default Layout;
