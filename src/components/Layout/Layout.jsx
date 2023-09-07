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