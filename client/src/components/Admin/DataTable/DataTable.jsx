import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { useEffect } from "react";

const DataTable = (props) => {
  const handleEdit = (id) => {
    props.setEditRow(id);
    props.setOpen(true);
  };
  const handleDelete = (id) => {
    props.setDeleteOpen(true);
    props.setDeleteRow(id);
    console.log(id);
  };

  const colums = [...props.columns];
  const filterColums = colums.filter((item) => item.field !== "password");
useEffect(()=>{

})
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
        return (
          <div className="action">
            <div onClick={() => handleEdit(params.row)}>
              <img src="/src/assets/svg/view.svg" alt="" />
            </div>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <img src="/src/assets/svg/delete.svg" alt="" />
            </div>
            {props.slug == "products" && (
              <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/src/assets/svg/barChart.svg" alt="" />
              </Link>
            )}
          </div>
        );
      }
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.slug == "orders" ? [...filterColums] : [...filterColums, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[7]}
        disableRowSelectionOnClickpx
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

DataTable.propTypes = {
  slug: propTypes.string,
  rows: propTypes.any,
  columns: propTypes.any,
  setOpen: propTypes.func,
  setEditRow: propTypes.func,
  setDeleteOpen: propTypes.func,
  setDeleteRow: propTypes.func,
};

export default DataTable;
