import "./Home.scss";
import logo from "../../../assets/Logo_ea.png";
import { Link } from "react-router-dom";
import Form from "../../../components/Pages/Form/Form";
import { useState } from "react";
import ButtonContext from "../../../components/Pages/Button/ButtonContext";
import useButtonContext from "../../../hooks/useButtonContext";

const body = {
  name: "",
  email: "",
  phone: "",
};

const Home = () => {
  const {show, showForm } = useButtonContext()
  // const [open, setOpen] = useState(false);

  // const showForm = () => {
  //   if (open === false) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
      // const corps = document.querySelector(".home__page");
      // corps.classList.remove("none");
  //   }
  // };

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
        {show && (
          // <ButtonContext.Provider value={["", showForm, body]}>
            <Form />
          // </ButtonContext.Provider>
        )}
    </div>
  );
};

export default Home;
