import "./Profile.scss";
import AdminPhoto from "/admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div id="profile">
      <h1>Profile</h1>
      <div className="edit__admin">
        <h2>Modifier votre profile</h2>
        <button className="edit__profile">
          <FontAwesomeIcon icon={faEdit} beat />
          éditer
        </button>
      </div>
      <div className="admin__card">
        <div className="admin__img">
          <img src={AdminPhoto} alt="sary" />
        </div>
        <div className="info__admin">
          <h1 className="admin__name">Sylvestre Hardy</h1>
          <h2 className="admin__email">hardy@gmail.com</h2>
          <h1 className="user__admin">- Administrateur</h1>
        </div>
      </div>
      <button className="logout__button">
        <FontAwesomeIcon icon={faSignOutAlt} flip />
        Se déconnecter
      </button>
    </div>
  );
};

export default Profile;
