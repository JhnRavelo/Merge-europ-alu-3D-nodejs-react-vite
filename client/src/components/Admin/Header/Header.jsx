import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoEuro from "../../../assets/Logo_Euro.png";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import useAdminContext from "../../../hooks/useAdminContext";

const Header = () => {
  const {data} = useAdminContext()
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
          <img src={data.avatar} alt="" className="userIcon"/>
          {/* <FontAwesomeIcon icon={faUser} className="userIcon" /> */}
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
