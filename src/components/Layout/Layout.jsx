import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <div>
        <Chemins/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout