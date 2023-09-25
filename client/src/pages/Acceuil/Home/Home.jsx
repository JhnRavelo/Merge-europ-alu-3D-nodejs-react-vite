import './Home.css'
import logo from '../../../assets/Logo_ea.png'
// import logo1 from '../../../assets/Logo_aluhd.png'

const Home = () => {
  return (
    <div id="home__page">
      <div className="flou"></div>
      <div className="header__home__page">
        <div className="logo__home">
          <img src={logo} alt="logo" />
          {/* <img src={logo1} alt="logo" /> */}
        </div>
        {/* <div className="connexion"><h1>Se connecter</h1></div> */}
      </div>
      <div className="body__home__page">
          <div className="intro">
            <h1 className="intro__h1">
              Innovation Continue <span>.</span>
            </h1>
            <p className="intro__p">
            La menuiserie aluminium qui révolutionne la construction à Madagascar, avec des produits de qualité, sur mesure et conformes aux normes européennes.
            </p>
            <div className="button__intro">
              <button className="start">Commencer</button>
              <button className="start connect">Se conneter</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home