import "../Users/User.scss";
import { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable/DataTable";
import defaultAxios from "../../../api/axios";
import useButtonContext from "../../../hooks/useButtonContext";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
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
    field: "product",
    type: "string",
    inputMode: "number",
    headerName: "Nom du Produit",
    placeholder: "Votre Numéro",
    width: 120,
  },
  {
    field: "page",
    type: "string",
    inputMode: "number",
    headerName: "Catégorie",
    placeholder: "Votre Numéro",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  
];

const Commercials = () => {
  const [rows, setRows] = useState([]);
  const {show} = useButtonContext()

  useEffect(() => {
    getAllTrakers();
  }, [show]);

  const getAllTrakers = async () => {
    try {
      let res;
      res = await defaultAxios.get("/trakers/all");
      console.log(res.data);
      const newTable = res.data.map((tarker) => {
        var createdAt;
        
        createdAt = tarker.createdAt.slice(0, 10);
        return {
          id: tarker.ID_traker,
          name: tarker.name,
          email: tarker.email,
          phone: tarker.phone,
          product: tarker.product,
          page: tarker.page,
          createdAt,

        };
      });

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
        </div>
        <DataTable
          slug="orders"
          columns={columns}
          rows={rows}
        />
      </div>
    </>
  );
};

export default Commercials;
