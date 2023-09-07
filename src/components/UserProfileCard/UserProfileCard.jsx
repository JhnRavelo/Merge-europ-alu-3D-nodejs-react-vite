import "./UserProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"

const UserProfileCard = () => {
  return (
    <>
      <div className="upc">
        <div className="wrapper">
          <div className="img-area">
            <div className="inner-area">
              <img
                src=""
                alt=""
              />
            </div>
            <div className="changeImg">
              <FontAwesomeIcon className="plusIcon" icon={faPlus}/>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" className="gl">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="insta">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="yt">
              <i className="fa fa fa-whatsapp"></i>
            </a>
          </div>
          <div className="name">HERINAVALONA</div>
          <div className="firstname">Sylvestre Hardy</div>
          <div className="email">sylvestrehardy@gmail.com</div>
          <div className="number">034 66 454 54</div>
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
