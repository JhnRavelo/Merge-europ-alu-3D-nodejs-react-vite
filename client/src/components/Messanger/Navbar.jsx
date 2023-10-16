import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useButtonContext from "../../hooks/useButtonContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const notifRef = useRef();
  const { dataPage, setBody, notif } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [notifCount, setNotifCount] = useState(0);
  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
  };

  const handleLogOut = async () => {
    try {
      const res = await axiosPrivate.get("/auth/logout");
      if (res.data == "SUCCESS") {
        setBody({
          name: "",
          email: "",
          pgone: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowNotif = () => {
    setNotifCount(0)
    notifRef.current.classList.toggle("visible");
  };

  useEffect(() => {
    if (notif?.length > 0) {
      setNotifCount(notif.length);
    }
  }, [notif]);

  return (
    <div className="navbar">
      <div className="user">
        <img src={dataPage?.userRead[0]?.avatar} alt="photos" />
        <span>{dataPage?.userRead[0]?.name}</span>
      </div>
      <button className="x" onClick={handleOpenMenu}>
        <FontAwesomeIcon
          className="xNotif"
          onClick={handleShowNotif}
          icon={faXmark}
        />
      </button>
      <div onClick={handleShowNotif} className="notication">
        {notifCount > 0 ? (
          <FontAwesomeIcon className="bell" icon={faBell} shake />
        ) : (
          <FontAwesomeIcon className="bell" icon={faBell} />
        )}
        {notifCount > 0 && <span>{notifCount}</span>}
      </div>
      <div ref={notifRef} className="cardNotif">
        <FontAwesomeIcon
          className="xNotif"
          onClick={handleShowNotif}
          icon={faXmark}
        />
        <div className="messNotif">
          {notif?.length > 0 &&
            notif.map((item, index) => (
              <span key={index}>
                {item.send.name} a envoyé {item.count}{" "}
                {item.count > 0 ? "messages" : "message"}
              </span>
            ))}
        </div>
      </div>
      <button className="deconnexion" onClick={handleLogOut}>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          flip
          style={{ marginRight: "5px" }}
        />
        Déconnexion
      </button>
    </div>
  );
};

export default Navbar;
