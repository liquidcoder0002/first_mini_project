import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css"
import Model from "../subcomponent/Model"


const rows = [
   {name: "string",
    mobile: 0,
    dob: 0,
    gender: "string",},

    {name: "string",
        mobile: 0,
        dob: 0,
        gender: "string",},

    {name: "string",
        mobile: 0,
        dob: 0,
        gender: "string",}
  ];
export default function dashboard() {
    
  return (<>
  <div style={{padding:"20px",textAlign:"right"}}>
    
    <Model/>
  </div>
    <div className='contan'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className='main_cls' >Name</TableCell>
            <TableCell className='main_cls' align="right">Mobile</TableCell>
            <TableCell className='main_cls' align="right">Birth-Date</TableCell>
            <TableCell className='main_cls' align="right">Gender</TableCell>
            <TableCell className='main_cls' align="right">Edit</TableCell>
            <TableCell className='main_cls' align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right"><Button variant="outlined">Edit</Button></TableCell>
              <TableCell align="right"><Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
          </>
  )
}
