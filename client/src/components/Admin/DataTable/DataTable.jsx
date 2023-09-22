import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types"

const DataTable = (props) => {
  const handleDelete = (id) => {
    console.log(id);
    //delete the item
    // mutation.mutate(id)
  };

const colums = [...props.columns]
// props.columns.filter((item)=>{
//     console.log(item);
//     item.field!=="password"})
const filterColums = colums.filter((item)=>  item.field !== "password")
console.log(filterColums);
// console.log([...filterColums]);

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          {props.slug == "users" && (
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/src/assets/svg/view.svg" alt="" />
            </Link>
          )}
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/src/assets/svg/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...filterColums, actionColumn]}
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
        pageSizeOptions={[5]}
        //   checkboxSelection
        disableRowSelectionOnClick
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
    columns: propTypes.any
}

export default DataTable;
