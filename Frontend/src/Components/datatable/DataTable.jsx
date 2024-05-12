import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';






export default function DataTable () {
    
const [rows, setRows] = useState([])
const fetchData = async () => {
    const res = await axios.get('http://localhost:8500/api/admin/getstudents');
    console.log(res)
    console.log(res.data.data)
    const filterData = res.data.data.map((item) => {
        return {
            id: item.studentId,
            // firstName: item.firstname,
            // lastName: item.lastname,
            courseName: item.course,
            password: item.password,
            Image: item.profilePicture || "😊",
            name: item.firstname + " " + item.lastname
        }
    })
    console.log(filterData)
    setRows(filterData)
}
useEffect(() => {
    console.log(rows, "====>>>>> row ")
    fetchData()
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}