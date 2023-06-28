import React from 'react'
import { styled } from '@mui/material/styles';
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
    color: theme.palette.common.white,
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
  createData('Educational Codeforces Round 151 (Rated for Div. 2)', 'CodeForces', '29/Jun/2023', '20:05', '2'),
  createData('Starters 96', 'CodeChef', '28/Jun/2023','20:00','2'),
  createData('AtCoder Beginner Contest 308', 'AtCoder', '1/Jul/2023', '17:30', '1:40'),
];


function UpcomingContests() {
  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 , backgroundImage:'linear-gradient(to right, #b2bcbe, #8eb3b7, #5dc4c4, #28c8b5, #36e5b6)'}}>
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
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.platform}</StyledTableCell>
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

export default UpcomingContests
