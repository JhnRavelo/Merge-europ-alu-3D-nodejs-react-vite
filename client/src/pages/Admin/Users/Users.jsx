import "./User.scss";
import { useEffect, useState } from "react";
import Form from "../../../components/Admin/Form/Form";
import { userRows } from "../../../assets/js/data.js";
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
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />;
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
    field: "type",
    type: "string",
    inputMode: "text",
    headerName: "Type",
    placeholder: "Type de User",
    width: 90,
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

// const body = {
//   id:"",
//   img:"",
//   name:"",
//   type:"",
//   email:"",
//   phone:"",
//   createdAt:"",
//   connected:false,

// }

const Users = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, [open]);

  const getAllUsers = async () => {
    try {
      const res = await defaultAxios.get("/auth/getUsers");
      // console.log(res.data);
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
          img: user.avatar,
          name: user.name,
          type: user.type,
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

  // const showForm = () => {
  //   if (open === false) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // };

  return (
    <>
      <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button onClick={() => setOpen(true)}>Add New User</button>
        </div>
        <DataTable
          slug="users"
          columns={columns}
          rows={rows}
          setOpen={setOpen}
          setEditRow={(value) => setEditRow(value)}
          setDeleteOpen={setDeleteOpen}
        />

        {open && (
          <Form
            slug="user"
            columns={columns}
            setOpen={setOpen}
            editRow={editRow}
            setEditRow={(value) => setEditRow(value)}
            url="/auth/User"
          />
        )}
      </div>
      {deleteOpen && <ModalDelete />}
    </>
  );
};

export default Users;
