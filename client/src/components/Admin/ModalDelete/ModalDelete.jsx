import { Button } from "@mui/material";
import { useState } from "react";
import "./ModalDelete.css";
import Trash from "../../../assets/poubelle.png";

function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? " scale-100" : "scale-125 opacity-0"
        }`}
      >
        <Button
          onClick={onClose}
          className="absolute top-1 right-2 p-1 rounded-lg text-black-500 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          x
        </Button>
        {children}
      </div>
    </div>
  );
}

const ModalDelete = () => {
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

export default ModalDelete;

// export default function Modal({ open, onClose, children }) {
//   return (
//     <div
//       onClick={onClose}
//       className={`fixed inset-0 flex justify-center items-center transition-colors
//       ${open ? "visible bg-black/20" : "invisible"}
//     `}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className={`bg-white rounded-xl shadow p-6 transition-all ${
//           open ? " scale-100" : "scale-125 opacity-0"
//         }`}
//       >
//         <Button
//           onClick={onClose}
//           className="absolute top-1 right-2 p-1 rounded-lg text-black-500 bg-white hover:bg-gray-50 hover:text-gray-600"
//         >
//           x
//         </Button>
//         {children}
//       </div>
//     </div>
//   );
// }
