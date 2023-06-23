import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import UpcomingContests from './HomeComponents/UpcomingContests';
import Practice from './HomeComponents/Practice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
  createData('Educational Codeforces Round 151 (Rated for Div. 2)', 'CodeForces', '29/Jun/2023', '20:05', '2'),
  createData('Starters 96', 'CodeChef', '28/Jun/2023','20:00','2'),
  createData('AtCoder Beginner Contest 308', 'AtCoder', '1/Jul/2023', '17:30', '1:40'),
];


function Home() {
  return (
    <>
     <Box sx={{mx:7,mt:4}}>
    <Typography variant="h3" sx={{color:'blue'}} >UpComing Contests in this Week...</Typography>
    <br />
     
     <UpcomingContests/>
      
     <br /><br />

     <Typography variant="h4" sx={{color:'green'}} >Practice Problems...</Typography>
      
      <br />
     <Practice/>
    </Box>
    </>
  )
}

export default Home
