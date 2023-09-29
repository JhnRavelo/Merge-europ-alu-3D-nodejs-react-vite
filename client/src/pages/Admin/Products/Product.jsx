import "../Users/User.scss";
import { useEffect, useState } from "react";
import Form from "../../../components/Admin/Form/Form";
import DataTable from "../../../components/Admin/DataTable/DataTable";
import defaultAxios from "../../../api/axios";
import ModalDelete from "../../../components/Admin/ModalDelete/ModalDelete";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
  },
  {
    field: "png",
    headerName: "Image",
    type: "file",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.png} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "Nom du produit",
    inputMode: "text",
    placeholder: "Votre produit",
    type: "string",
    width: 150,
  },
  {
    field: "description",
    type: "textArea",
    inputMode: "text",
    headerName: "Description",
    placeholder: "Description du produit",
    width: 500,
  },
  {
    field: "pub",
    headerName: "Publicité",
    type: "file",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.pub} alt="" />;
    },
  },
  
];

const Pages = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteRow, setDeleteRow] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, [open]);

  const getAllUsers = async () => {
    try {
      const res = await defaultAxios.get("/page");
      console.log(res.data);
      const newTable = res.data.map((user) => {
        var createdAt;
        createdAt = user.createdAt.slice(0, 10);
        return {
          id: user.ID_page,
          page: user.page,
          home: user.home,
          icon: user.icon,
          position: user.position,
          minYAngle: user.minYAngle,
          maxYAngle: user.maxYAngle,
          maxXAngle: user.maxXAngle,
          minXAngle: user.minXAngle,
          createdAt,
          url: user.url,
        };
      });
      // console.log(newTable);

      setRows(newTable);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users">
      <div className="info">
        <h1>Produits</h1>
        <button onClick={() => setOpen(true)}>Add New Produit</button>
      </div>
      <DataTable
        slug="products"
        columns={columns}
        rows={rows}
        setOpen={setOpen}
        setEditRow={(value) => setEditRow(value)}
        setDeleteOpen={setDeleteOpen}
        setDeleteRow={setDeleteRow}
      />

      {open && (
        <Form
          slug="page"
          columns={columns}
          setOpen={setOpen}
          editRow={editRow}
          setEditRow={(value) => setEditRow(value)}
          url="/page"
        />
      )}
      {deleteOpen && (
        <ModalDelete
          setDeleteOpen={setDeleteOpen}
          setDeleteRow={setDeleteRow}
          deleteRow={deleteRow}
          url="/page"
          title="ce page"
        />
      )}
    </div>
  );
};

export default Pages;
