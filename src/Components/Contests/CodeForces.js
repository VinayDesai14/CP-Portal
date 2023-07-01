/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   backgroundColor:theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, platform,date,time,duration) {
  return { name,platform,date,time,duration };
}

const rows = [
  createData('Codeforces Round (Div. 2)', 'CodeForces', '06/July/2023', '20:05', '2'),
  createData('Codeforces Round (Div. 3)', 'CodeForces', '07/July/2023','20:00','2:15'),
  createData('Codeforces Round (Div. 1 + Div. 2)', 'CodeForces', '11/July/2023', '20:05', '2'),
];

function CodeForces() {

// const[mydata,setmydata]=useState([]);

// useEffect(()=>{
// axios
// .get("https://codeforces.com/api/contest.list?gym=false&phase=BEFORE")
// .then((res) => setmydata(res.data.result));
// },[]);

  return (
    <>
    {/* {mydata.map((contest)=>{
      const{id,name,type,phase,frozen,durationSeconds,
        startTimeSeconds,relativeTimeSeconds,preparedBy
      ,websiteUrl,description,difficulty,kind,icpcRegion,country,city,season}=contest;
      return <div key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
      </div>
      
    })} */}
    <h3 style={{color:'white',marginTop:'30px',marginLeft:"90px"}}>Codeforces</h3>
    
      <TableContainer component={Paper} sx={{width:"90%",margin:"auto"}} >
      <Table sx={{width:"100%"}}aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Platform</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <a href='https://codeforces.com/contests'style={{textDecoration:'none',color:'black',paddingRight:'30px'}}>{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="center" >{row.platform}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.duration} hrs</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default CodeForces
