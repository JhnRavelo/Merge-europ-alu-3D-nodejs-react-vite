import "./ModalDelete.css";
import Trash from "../../../assets/poubelle.png";

const ModalDelete = () => {
  return (
    <>
      <div id="champDelete">
        <div className="delete__overlay"></div>

        <div className="delet__modal">
          <div className="x__mark">X</div>
          <div className="modal__trash">
            <img src={Trash} alt="" />
          </div>
          <h1 className="delete__h1">
            Supprimer Utilisateur
          </h1>
          <p className="delete__p">Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
          <div className="button__delete">
            <button className="suppr">Delete</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;


