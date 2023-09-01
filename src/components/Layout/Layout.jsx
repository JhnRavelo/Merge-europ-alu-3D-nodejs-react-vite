import Chemins from '../../routers/Chemins'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Marge from '../marge/marge'

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <Marge/> */}
      <div>
        <Chemins/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout