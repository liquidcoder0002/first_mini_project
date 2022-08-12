import React, { useState } from 'react'
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
  {
    name: "string",
    mobile: 0,
    dob: 0,
    gender: "string",
  },

  {
    name: "string",
    mobile: 0,
    dob: 0,
    gender: "string",
  },

  {
    name: "string",
    mobile: 0,
    dob: 0,
    gender: "string",
  }
];
export default function Dashboard() {

  const [customer, setCustomer] = useState([])
  const [close, setClose] = useState(true)

  const handleCustomerData = (e) => {
    console.log("e============", e)
    setCustomer([...customer, e])
  }

  console.log("customer", customer);
  const handledelete = (e) => {

    customer.splice(e.target.attributes[3].value,1)
    // customer[e.target.attributes[3].value]
    console.log("e============",customer[e.target.attributes[3].value].name)

  }
  console.log(customer)
  return (<>
    <div style={{ padding: "20px", textAlign: "right" }}>

      <Model data="dhruv" customerData={handleCustomerData} model_op={handleCustomerData}/>
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
            {customer.map((row,index) => {
              console.log("rowwwww", row);
             return <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right">{ new Date(row.dob).getDate()  + "/" + (new Date(row.dob).getMonth()+ 1 ) + "/" +  new Date(row.dob).getFullYear()}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right"><Button variant="outlined">Edit</Button></TableCell>
                <TableCell align="right"><Button variant="outlined" startIcon={<DeleteIcon />} onClick={handledelete} Index={index}>Delete</Button></TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  </>
  )
}
