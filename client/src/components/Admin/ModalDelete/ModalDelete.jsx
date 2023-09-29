import "./ModalDelete.css";
import Trash from "../../../assets/poubelle.png";
import propTypes from "prop-types";
import defaultAxios from "../../../api/axios";

const ModalDelete = ({ setDeleteOpen, deleteRow, url }) => {
  const handleDelete = async () => {
    console.log(deleteRow);
    try {
      const res = await defaultAxios.delete(`${url}/${deleteRow}`);
      console.log(res.data);
      if(res.data == "supprimé"){
        setDeleteOpen(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div id="champDelete">
        <div className="delete__overlay"></div>

        <div className="delet__modal">
          <div className="x__mark" onClick={() => setDeleteOpen(false)}>
            X
          </div>
          <div className="modal__trash">
            <img src={Trash} alt="" />
          </div>
          <h1 className="delete__h1">Supprimer Utilisateur</h1>
          <p className="delete__p">
            Êtes-vous sûr de vouloir supprimer cet utilisateur ?
          </p>
          <div className="button__delete">
            <button className="suppr" onClick={() => handleDelete()}>
              Delete
            </button>
            <button className="cancel" onClick={() => setDeleteOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ModalDelete.propTypes = {
  setDeleteOpen: propTypes.func,
  deleteRow: propTypes.any,
  url: propTypes.string,
};

export default ModalDelete;
