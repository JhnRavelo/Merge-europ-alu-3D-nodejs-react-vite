import "./Home.scss";
import logo from "../../../assets/Logo_ea.png";
import { Link } from "react-router-dom";
import Form from "../../../components/Pages/Form/Form";
import useButtonContext from "../../../hooks/useButtonContext";
import { useEffect } from "react";
import useLogout from "../../../hooks/useLogout";

const Home = () => {
  const { show, showForm } = useButtonContext();
  const logout = useLogout()

  useEffect(() => {
      logout()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

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
          <h1 className="intro__p">
            La menuiserie aluminium qui révolutionne la construction à
            Madagascar, avec des produits de qualité, sur mesure et conformes
            aux normes européennes.
          </h1>
          <div className="button button__intro">
            <Link to="/page">
              <div className="start">Commencer</div>
            </Link>
            <div
              className="start connect"
              onClick={() => {
                showForm();
              }}
            >
              Se conneter
            </div>
          </div>
        </div>
      </div>
      {show && <Form />}
    </div>
  );
};

export default Home;
