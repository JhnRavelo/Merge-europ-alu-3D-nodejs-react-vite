import { createContext, useState } from "react";
import propTypes from "prop-types";

const AdminContext = createContext();

const AdminProviser = ({ children }) => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState([]);
  const [nbUser, SetNbUser] = useState(0);
  const [nbProd, SetNbProd] = useState({});

  return (
    <AdminContext.Provider
      value={{
        data,
        setData,
        open,
        setOpen,
        top,
        setTop,
        nbUser,
        SetNbUser,
        nbProd,
        SetNbProd,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

AdminProviser.propTypes = {
  children: propTypes.any,
};

export { AdminProviser };

export default AdminContext;
