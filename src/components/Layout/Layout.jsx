import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Espace from '../Espace/Espace'


const Layout = () => {
  return (
    <div>
      <Header/>
      <Espace/>
      <div>
        <Chemins/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout