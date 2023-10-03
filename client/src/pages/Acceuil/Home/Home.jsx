import "./Home.scss";
import logo from "../../../assets/Logo_ea.png";
import { Link } from "react-router-dom";
import Form from "../../../components/Pages/Form/Form";
import useButtonContext from "../../../hooks/useButtonContext";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect } from "react";

const Home = () => {
  const { show, showForm } = useButtonContext();
  const privateAxios = useAxiosPrivate();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await privateAxios.get("/auth/logout");

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Link to="/page/fenetre">
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
