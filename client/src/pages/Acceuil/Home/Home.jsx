import "./Home.scss";
import logo from "../../../assets/Logo_ea.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home__page">
      <div className="body"></div>
      <div className="flou"></div>
      <div className="header__home__page">
        <div className="logo__home">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="body__home__page">
        <div className="intro">
          <h1 className="intro__h1">
            Innovation Continue <span>.</span>
          </h1>
          <p className="intro__p">
            La menuiserie aluminium qui révolutionne la construction à
            Madagascar, avec des produits de qualité, sur mesure et conformes
            aux normes européennes.
          </p>
          <div className="button button__intro">
            <Link to="/page/fenetre">
              <div className="start">
                Commencer
              </div>
            </Link>
            <div className="start connect">Se conneter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
