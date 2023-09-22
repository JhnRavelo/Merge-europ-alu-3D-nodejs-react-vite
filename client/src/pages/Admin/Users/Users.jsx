import "./User.scss";
import { useState } from "react";
import Form from "../../../components/Admin/Form/Form";
import { userRows } from "../../../assets/js/data.js";
import DataTable from "../../../components/Admin/DataTable/DataTable";
// import { useQuery } from "@tanstack/react-query";


const columns= [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/public/avatar/User-avatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    inputMode: "text",
    headerName: "Nom",
    placeholder: "Votre Nom",
    width: 90,
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

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />

      {open && <Form slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
