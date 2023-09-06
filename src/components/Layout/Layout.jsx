import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Grids from '../Grids/Grids'
// import Espace from '../Espace/Espace'
import ProductContext from '../Products/ProductContext'

import Home from '../Home/Home'
import Products from '../Products/Products'
import HeaderProduct from '../HeaderProduct/HeaderProduct'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <Espace/> */}
      <div>
        <Grids/>
        <Chemins/>
        <ProductContext.Provider value={1}>
        <Home />
        <HeaderProduct/>
        <Products />
        </ProductContext.Provider>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Layout