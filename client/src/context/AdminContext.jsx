import { createContext, useState } from "react";
import propTypes from "prop-types";

const AdminContext = createContext();

const AdminProviser = ({ children }) => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState([]);
  const [nbUser, SetNbUser] = useState(0);
  const [nbProd, SetNbProd] = useState(0);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commercial, setCommercial] = useState([]);
  const [year, setYear] = useState(() => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  });
  const [years, setYears] = useState([]);

  return (
    <AdminContext.Provider
      value={{
        data,
        commercial,
        setCommercial,
        setData,
        open,
        setOpen,
        top,
        setTop,
        nbUser,
        SetNbUser,
        nbProd,
        SetNbProd,
        order,
        setOrder,
        user,
        setUser,
        deleteOpen,
        setDeleteOpen,
        year,
        setYear,
        years,
        setYears,
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
