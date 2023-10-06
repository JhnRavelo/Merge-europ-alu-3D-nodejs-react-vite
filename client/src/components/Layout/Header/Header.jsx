import "./Header.css";
import Logo from "../../../assets/Logo_aluhd.png";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import defaultAxios from "../../../api/axios";

const Header = () => {
  const { auth } = useAuth();
  const headerRef = useRef();
  const showLogoutRef = useRef();
  const showProfileRef = useRef();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const userRef = useRef();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const fetchData = async () => {
    try {
      const res = await defaultAxios.get("/page");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", menuIsClosed);
    return () => document.body.removeEventListener("click", menuIsClosed);
  }, []);

  useEffect(() => {
    if (location.pathname == "/page/profile") {
      showProfileRef.current.style.opacity = 0;
      showProfileRef.current.style.pointerEvents = "none";
    } else {
      showProfileRef.current.style.opacity = 1;
      showProfileRef.current.style.pointerEvents = "all";
    }
  }, [location.pathname]);

  const onOpenMenu = () => {
    headerRef.current.classList.toggle("menu-is-open");
  };

  const showOption = () => {
    showProfileRef.current.classList.toggle("showed");
    showLogoutRef.current.classList.toggle("showed");
  };

  useEffect(() => {
    const controller = new AbortController();
    const connected = async () => {
      if (!userRef.current.className.includes("connected")) {
        try {
          const res = await axiosPrivate.get("/auth", {
            signal: controller.signal,
          });

          if (res.data.name) {
            userRef.current.classList.add("connected");
          } else {
            userRef.current.classList.remove("connected");
          }
        } catch (error) {
          userRef.current.classList.remove("connected");
          console.log(error);
        }
      }
    };

    connected();

    return () => controller?.abort;
  }, [auth, axiosPrivate]);

  const handleLogOut = async () => {
    try {
      const res = await axiosPrivate.get("/auth/logout");
      
      userRef.current.classList.remove("connected");
      if (res.data == "SUCCESS") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header ref={headerRef} id="header">
        <div className="header">
          <div className="header-logo">
            <img className="logo-header" src={Logo} alt="Logo" />
          </div>

          <div className="login__logout" ref={userRef}>
            <div className="deco">
              <div className="use__icon" onClick={showOption}>
                <FontAwesomeIcon
                  className="userIcon fa-user"
                  icon={faUser}
                  fade
                />
              </div>
            </div>
            <div className="userOption">
              <div
                className="logout"
                ref={showLogoutRef}
                onClick={handleLogOut}
              >
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
                <NavLink to="/">
                  <h1>Acceuil</h1>
                </NavLink>
              </li>
              {data.map((page, index) => {
                return (
                  <li key={index}>
                    <NavLink to={`/page/${page.ID_page}`}>
                      <h1>{page.page}</h1>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
