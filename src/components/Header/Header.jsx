import "./Header.css";
import Logo from "../../assets/Logo_aluhd.png";
import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const headerRef = useRef();
  const showLogoutRef = useRef();
  const showProfileRef = useRef();

  useEffect(() => {
    function menuIsClosed(e) {
      const profile = showProfileRef.current;
      const logout = showLogoutRef.current;
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

      if (
        !target.classList.contains("userIcon") &&
        !target.classList.contains("logout") &&
        !target.classList.contains("login__logout") &&
        !target.classList.contains("use__icon") &&
        !target.matches(".profile")
      ) {
        profile.classList.remove("showed");
        logout.classList.remove("showed");
      }
    }
    document.body.addEventListener("click", menuIsClosed);
  }, []);

  const onOpenMenu = () => {
    headerRef.current.classList.toggle("menu-is-open");
  };
const showOption = () => {
  showProfileRef.current.classList.toggle("showed")
  showLogoutRef.current.classList.toggle("showed")
}

  return (
    <>
      <header ref={headerRef} id="header">
        <div className="header">
          <div className="header-logo">
            <img className="logo-header" src={Logo} alt="Logo" />
          </div>

          <div className="login__logout">
            <div className="deco">
              <div className="use__icon" onClick={showOption}>
                <FontAwesomeIcon className="userIcon fa-user" icon={faUser} fade />
              </div>
            </div>
            <div className="userOption" >
              <div className="logout" ref={showLogoutRef}>
                <p>Se déconnecter</p>
              </div>
              <div className="profile" ref={showProfileRef}>               
                <NavLink to="/page/profile">
                  <p>Votre Profils</p>
                </NavLink>
              </div>
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
                <NavLink to="acceuil">
                    <h1>Acceuil</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/page/porte">
                    <h1>Porte</h1>
                </NavLink>
              </li>
              <li>
                <Link to="/page/fenetre">
                    <h1>Fenêtre</h1>
                </Link>
              </li>
              <li>
                <Link to="/page/habillage">
                    <h1>Habillage Façade</h1>
                </Link>
              </li>
              <li>
                <NavLink to="/page/Baies">
                    <h1>Baies</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/page/GardeCorps">
                    <h1>Garde Corps</h1>
                </NavLink>
              </li>
              <li>
                 <NavLink to="/page/AménagementIntérieur">
                    <h1>Aménagement Intérieur</h1>
                </NavLink>
              </li>
              <li>
                 <NavLink to="/page/AménagementExtérieur">
                    <h1>Aménagement Extérieur</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="/page/Fermeture Extérieu">
                    <h1>Fermeture Extérieu</h1>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
