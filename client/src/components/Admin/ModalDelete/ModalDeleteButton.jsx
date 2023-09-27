import { useState } from "react";
import Modal from "./ModalDelete";
import "./ModalDelete.css";
import Trash from "../../../assets/poubelle.png";

const ModalDeleteButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="app">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
        Delete
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <img src={Trash} alt="" className="mx-auto text-red-500" />
          <div className="mx-auto my-4 w48">
            <h3 className="text-lg font-black text-gray-800">
              Confirmer Suppression
            </h3>
            <p className="text-sm text-gray-500">
              Êtes-vous sûr de vouloir supprimer cet utilisateur ?
            </p>
            <div className="flex mt-4 gap-4">
              <button className="btn btn-danger w-full">Delete</button>
              <button
                className="btn btn-light w-full"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default ModalDeleteButton;
