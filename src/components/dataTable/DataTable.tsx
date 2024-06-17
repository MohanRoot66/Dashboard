import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./datatable.scss"
import { Link } from "react-router-dom"

interface Props{
    columns : GridColDef[],
    rows : object[],
    slug:string
}

export default function DataTable({columns,rows,slug}:Props) {

    const handleDelete = (id:number) =>{
        console.log("id deleted",id);
    }

    const actionColumn : GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params)=>{
            return(
                <div className="actions">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <img src="view.svg" alt="" />
                    </Link>
                    <Link to="" onClick={()=>handleDelete(params.row.id)}>
                        <img src="delete.svg" alt="" />
                    </Link>
                </div>
            )
        }
    }

  return (
    <div className="datatable">
        <DataGrid
        className="datagrid"
            rows={rows}
            columns={[...columns,actionColumn]}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{toolbar:GridToolbar}}
            slotProps={{
                toolbar:{
                    showQuickFilter : true,
                    quickFilterProps:{
                        debounceMs:500
                    }
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
        />
    </div>
  )
}
