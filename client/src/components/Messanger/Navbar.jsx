import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useButtonContext from "../../hooks/useButtonContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const notifRef = useRef();
  const { dataPage, setBody } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
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
    notifRef.current.classList.toggle("visible");
  };

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
        <FontAwesomeIcon className="bell" icon={faBell} shake />
        <span>1</span>
      </div>
      <div ref={notifRef} className="cardNotif">
        <FontAwesomeIcon
          className="xNotif"
          onClick={handleShowNotif}
          icon={faXmark}
        />
        <div className="messNotif">
          <span>Nouveau message de Hardy</span>
          <span>Nouveau message de Hardy</span>
          <span>Nouveau message de Hardy</span>
          <span>Nouveau message de Hardy</span>
          <span>Nouveau message de Hardy</span>
          <span>Nouveau message de Hardy</span>
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

// import React, { useContext } from 'react'
// // import photos from "../img/add.png"
// import { signOut } from 'firebase/auth'
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'
// import Xmark from '../img/x.png'

// const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)

//   const handleOpenMenu = () => {
//     const sidebar = document.querySelector(".sidebar")
//     sidebar.classList.toggle("visible")
//   };

//   return (
//     <div className='navbar'>
//       {/* <span className="logo">Chat</span> */}
//       <div className="user">
//         <img src={currentUser.photoURL} alt="photos" />
//         <span>{currentUser.displayName}</span>
//       </div>
//       <button className='x' onClick={handleOpenMenu}>
//         <img src={Xmark} alt="" />
//         {/* X */}
//       </button>
//       <button className='deconnexion' onClick={() => signOut(auth)}>Déconnexion</button>
//     </div>
//   )
// }

// export default Navbar
