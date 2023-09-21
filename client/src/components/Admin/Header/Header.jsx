import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoEuro from "../../../assets/Logo_Euro.png";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoEuro} alt="logo" />
        <span>{"Europ'Alu"}</span>
      </div>
      <div className="icons">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} className="bellIcon" />
          <span>1</span>
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faUser} className="userIcon" />
          <span>Cedy</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
