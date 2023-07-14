/* eslint-disable no-unused-vars */
import React from 'react'
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  createData('Starter 97', 'Codechef', '05/July/2023', '20:00', '2'),
  createData('Starter 98', 'Codechef', '12/July/2023', '20:00', '2'),
  createData('Starter 99', 'Codechef', '19/July/2023', '20:00', '2'),
  createData('Starter 100', 'Codechef', '26/July/2023', '20:00', '2'),
];

function CodeChef() {
  return (
    <>
    <h3 style={{color:'white',marginTop:'30px',marginLeft:"90px"}}>Codechef</h3>
      <TableContainer component={Paper} sx={{width:"90%",margin:"auto"}}>
      <Table sx={{ width:"100%" }}aria-label="customized table">
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
              <StyledTableCell component="th" scope="row" >
                <a href='https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests'style={{textDecoration:'none',color:'black',paddingRight:'180px'}} >{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="center"  >{row.platform}</StyledTableCell>
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

export default CodeChef