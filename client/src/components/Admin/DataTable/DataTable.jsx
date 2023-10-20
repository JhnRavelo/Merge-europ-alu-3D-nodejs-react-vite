import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import useAdminContext from "../../../hooks/useAdminContext";

const DataTable = (props) => {
  const [pagination, setPagination] = useState(() => {
    if (props.slug == "products") {
      return 5;
    } else return 7;
  });
  const [height, setHeight] = useState(() => {
    if (props.slug == "products") {
      return 70;
    } else return 50;
  });
  const { setSingleProduct } = useAdminContext();
  const navigate = useNavigate();
  const tableRef = useRef();

  const handleEdit = (id) => {
    props.setEditRow(id);
    props.setOpen(true);
  };
  const handleDelete = (id) => {
    props.setDeleteOpen(true);
    props.setDeleteRow(id);
  };
  const handleSingle = (row) => {
    setSingleProduct(row);
    navigate(`/admin/product/${row.id}`);
  };

  const colums = [...props.columns];
  const filterColums = colums.filter((item) => item.field !== "password");

  useEffect(() => {
    if (tableRef.current?.querySelector("button")) {
      if (props.slug == "orders" || props.slug == "users") {
        tableRef.current.querySelector("button").style.opacity = 1;
        tableRef.current.querySelector("button").style.pointerEvent = "all";
      } else {
        tableRef.current.querySelector("button").style.opacity = 0;
        tableRef.current.querySelector("button").style.pointerEvent = "none";
      }
    }
  }, [tableRef.current]);

  useEffect(() => {
    if (props.slug == "products") {
      setPagination(5);
      setHeight(70);
    } else {
      setPagination(7);
      setHeight(50);
    }
  }, [props.slug]);
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 100,
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
            <div onClick={() => handleSingle(params.row)}>
              <img src="/src/assets/svg/barChart.svg" alt="" />
            </div>
          )}
        </div>
      );
    },
    disableExport: true
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        ref={tableRef}
        rows={props.rows}
        columns={
          props.slug == "orders"
            ? [...filterColums]
            : [...filterColums, actionColumn]
        }
        rowHeight={height}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pagination,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            csvOptions: { disableToolbarButton: true },
            printOptions: {
              hideFooter: true,
              hideToolbar: true,
              // pageStyle: ".MuiDataGrid-root .MuiDataGrid-main .MuiDataGrid-cell{white-space: wrap;overflow: auto;color: red;}"
            },
          },
        }}
        pageSizeOptions={[pagination]}
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
