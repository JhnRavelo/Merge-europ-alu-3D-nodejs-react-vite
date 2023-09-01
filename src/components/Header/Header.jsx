import "./Header.css";
import Logo from "../../assets/Logo_aluhd.png";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    function menuIsClosed(e) {
      const header = headerRef.current;
      const target = e.target;
      if (
        !target.classList.contains("header-nav") &&
        !target.classList.contains("header-nav__content") &&
        !target.matches("#header-menu-trigger") &&
        !target.matches(".header-menu-trigger")
      ) {
        header.classList.remove("menu-is-open");
      }
    }
    document.body.addEventListener("click", menuIsClosed);
  }, []);

  const onOpenMenu = () => {
    headerRef.current.classList.toggle("menu-is-open");
  };

  return (
    <>
      <header ref={headerRef} id="header">
        <div className="header">
          <div className="header-logo">
            <img className="logo-header" src={Logo} alt="Logo" />
          </div>

          <div className="login__logout">
            <div className="deco">
              <div className="use__icon">
                <i className="userIcon fa-solid fa-user"></i>
              </div>
            </div>
            <div className="logout">
              <p>Se déconnecter</p>
            </div>
          </div>

          <a id="header-menu-trigger" onClick={onOpenMenu}>
            <i className="fa fa-bars burger header-menu-icon"></i>
          </a>
        </div>

        <nav className="header-nav">
          <a className="header-nav__close" title="close" onClick={onOpenMenu}>
            <span></span>
          </a>

          <h3>Naviguer vers</h3>

          <div className="header-nav__content">
            <ul className="header-nav__list">
              <li>
                <a title="home">
                  Acceuil
                </a>
              </li>
              <li>
                <NavLink to="/page/porte">
                    <h1>Porte</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/page/fenetre">
                    <h1>Fenêtre</h1>
                </NavLink>
              </li>
              <li>
                <a href="./Habillage_Facade.html">Habillage Façade</a>
              </li>
              <li>
                <a href="./Baies.html">Baies</a>
              </li>
              <li>
                <a href="./Garde_corp.html">Garde Corps</a>
              </li>
              <li>
                <a href="./Amenagement_Interieur.html">Aménagement Intérieur</a>
              </li>
              <li>
                <a href="./Amenagement_Exterieur.html">Aménagement Extérieur</a>
              </li>
              <li>
                <a href="./Fermeture_exterieur.html">Fermeture Extérieur</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
