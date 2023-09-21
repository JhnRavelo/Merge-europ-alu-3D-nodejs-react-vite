import "./UserProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { Fragment, useEffect, useRef, useState } from "react";
import avatars from "../../../assets/json/avatar.json"

const UserProfileCard = () => {
  const showChangeAvatarRef = useRef();
  const listeAvatarRef = useRef();
  // const profilRef = useRef([])
  const [imgProfile, setImgProfile] = useState(avatars[0]);
// useEffect(()=>{
  
// })

// const addToRefProfil= (el)=>{
//   if(el && !profilRef.current.includes(el)){
//     profilRef.current.push(el)
//   }
  
// }

  const showChangeAvatar = () => {
    listeAvatarRef.current.classList.toggle('showed')
  }

  const handleClick = (e) => {
    if(e.target.src.includes('Avatar-Profile')){
      setImgProfile(avatars[1])
    }
    else if(e.target.src.includes('user-profile')){
      setImgProfile(avatars[2])
    }
    else if(e.target.src.includes('woman-business')){
      setImgProfile(avatars[3])
    }
    else if(e.target.src.includes('woman-users')){
      setImgProfile(avatars[4])
    }
    
  }

  return (
    <>
      <div className="upc">
        <div className="wrapper">
          <div className="gauche">
            <div className="img-area">
              <div className="inner-area">
                <img
                  src={imgProfile}
                  alt="avatar"
                />
              </div>
              <div className="changeImg" ref={showChangeAvatarRef} onClick={showChangeAvatar}>
                <FontAwesomeIcon className="plusIcon" icon={faPlus}/>
              </div>
            </div>

            <div ref={listeAvatarRef} className="social-icons">
              {
                avatars.map((avatar, index)=>{
                  
                  if(index!==0){
                    return(
                      <Fragment key={index}>
                        <a>
                          <img  onClick={handleClick} src={avatar} alt="avatar" />
                        </a>
                      </Fragment>
                    )
                  }
                })
              }
            </div>
            <div className="name">HERINAVALONA</div>
            <div className="firstname">Sylvestre Hardy</div>
            <div className="email">sylvestrehardy@gmail.com</div>
            <div className="number">034 66 454 54</div>
          </div>

          <div className="buttons">
            <button>Message</button>
            <button>Pannier</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
