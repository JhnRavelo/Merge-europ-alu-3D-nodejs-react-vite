import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Grids from '../Grids/Grids'
// import Espace from '../Espace/Espace'
// import ProductContext from '../Products/ProductContext'

// import Home from '../Home/Home'
// import Products from '../Products/Products'
// import HeaderProduct from '../HeaderProduct/HeaderProduct'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <Espace/> */}
      <div>
        <Grids/>
<<<<<<< HEAD
        <Chemins/> 
=======
        <Chemins/>
        <ProductContext.Provider value={0}>
          <Home />
          <HeaderProduct/>
          <Products />
        </ProductContext.Provider>
        
>>>>>>> 96f8721 (modifocation title et logo page index.html)
      </div>
      <Footer/>
    </div>
  )
}

export default Layout