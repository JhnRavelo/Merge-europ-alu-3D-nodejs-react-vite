import Xmark from "../img/x.png";
import userPhoto from "../img/avatar/homme.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleOpenMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
  };

  return (
    <div className="navbar">
      <div className="user">
        <img src={userPhoto} alt="photos" />
        <span>{"Hardy"}</span>
      </div>
      <button className="x" onClick={handleOpenMenu}>
        <img src={Xmark} alt="" />
      </button>
      <button className="deconnexion">
        <FontAwesomeIcon icon={faSignOutAlt} flip style={{marginRight: '5px'}}/>
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
