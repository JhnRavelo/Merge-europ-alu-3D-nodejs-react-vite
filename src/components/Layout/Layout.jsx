import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Grids from '../Grids/Grids'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Layout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <div>
        <Grids/>
        <Chemins/> 
      </div>
      <Footer/>
    </div>
  )
}

export default Layout