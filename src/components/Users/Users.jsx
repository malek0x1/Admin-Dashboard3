import React, { useEffect, useState } from 'react'
import '../../App.css';
import './Users.css';
import Header from '../Header/Header';
import SideBar from "../../components/SideBar/SideBar";
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import { Delete } from '@material-ui/icons';
import { Add, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Users = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 140 },
        { field: 'email', headerName: 'Email', width: 140 },
        { field: 'phone', headerName: 'Phone', width: 140 },
        // { field: 'address', headerName: 'address', width: 120 },
        {
            field: 'website',
            headerName: 'website',
            type: 'number',
            width: 120,
        },
        {
            field: 'address',
            headerName: 'address',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.address.street || ''}`,
        },
        {
            field: "action", headName: "Action", width: 120, renderCell: (params) => {
                return (
                    <div className='cellAction' >
                        <IconButton >
                            <Edit sx={{ color: "#3bb077" }} onClick={(e) => e.stopPropagation()} />
                        </IconButton>
                        <IconButton>
                            <Delete color="error" onClick={(e) => e.stopPropagation()} />
                        </IconButton>
                    </div>)
            }
        }


    ];

    const [rows, setRows] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((data) => setRows(data))

    }, [])


    return (
        <>
            <div className="App">
                <Header />
                <div className="body">
                    <SideBar />
                    <div className="wrapper">
                        <div className="before-table">
                            <div className="duo-header">
                                <h1>Manage Users</h1>
                                <Link style={{ textDecoration: "none" }} to="/Admin-Dashboard3/users/new" className='link'><Button startIcon={<Add />}> Add User</Button></Link>
                            </div>

                            <div style={{ height: 500, width: '90%', margin: "auto" }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={6}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Users