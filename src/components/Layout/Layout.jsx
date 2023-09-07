import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Grids from '../Grids/Grids'

const Layout = () => {
  return (
    <div>
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