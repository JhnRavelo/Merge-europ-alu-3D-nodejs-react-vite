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
    field: "avatar",
    headerName: "Avatar",
    type: "file",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.avatar} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    inputMode: "text",
    headerName: "Nom",
    placeholder: "Votre Nom",
    width: 200,
  },
  {
    field: "email",
    type: "email",
    inputMode: "email",
    headerName: "Email",
    placeholder: "Votre Email",
    width: 200,
  },
  {
    field: "password",
    type: "password",
    inputMode: "password",
    headerName: "Mot de passe",
    placeholder: "Votre mot de passe",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    inputMode: "number",
    headerName: "Phone",
    placeholder: "Votre Numéro",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "connected",
    headerName: "Connected",
    width: 90,
    type: "boolean",
  },
];

const Commercials = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteRow, setDeleteRow] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, [open, deleteOpen]);

  const getAllUsers = async () => {
    try {
      let res;
      res = await defaultAxios.get("/auth/getCommercials");
      const newTable = res.data.map((user) => {
        var connected, createdAt;
        if (!user.refreshToken) {
          connected = false;
        } else {
          connected = true;
        }
        createdAt = user.createdAt.slice(0, 10);
        return {
          id: user.ID_user,
          avatar: user.avatar,
          name: user.name,
          email: user.email,
          phone: user.phone,
          createdAt,
          connected,
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
    <>
      <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button onClick={() => setOpen(true)}>Add New Commercial</button>
        </div>
        <DataTable
          slug="commercials"
          columns={columns}
          rows={rows}
          setOpen={setOpen}
          setEditRow={(value) => setEditRow(value)}
          setDeleteOpen={setDeleteOpen}
          setDeleteRow={setDeleteRow}
        />

        {open && (
          <Form
            slug="commercial"
            columns={columns}
            setOpen={setOpen}
            editRow={editRow}
            setEditRow={(value) => setEditRow(value)}
            url="/auth/User"
          />
        )}
      </div>
      {deleteOpen && (
        <ModalDelete
          setDeleteOpen={setDeleteOpen}
          setDeleteRow={setDeleteRow}
          deleteRow={deleteRow}
          url="/auth/User"
          title="ce Commercial"
        />
      )}
    </>
  );
};

export default Commercials;
