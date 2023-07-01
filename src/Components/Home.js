import React from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import UpcomingContests from './HomeComponents/UpcomingContests';
import Practice from './HomeComponents/Practice';
import CF from '../Images/codeforces.jpeg'
import CC from '../Images/codechef.png'
import ATC from '../Images/atcoder.png'
import HR from '../Images/hackerrank.png'
import HE from '../Images/hackerearth.jpeg'
import LC from '../Images/leetcode.png'

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

     <Box sx={{ textDecoration: 'none' }}>

      <Stack direction='row' spacing={21}>

      <Paper  sx={{height:200,width:375}} elevation={3}>
       <a target="_blank" href="https://codeforces.com/"><img src={CF} alt="CodeForces" width='375' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:400}} elevation={3}>
      <a target="_blank" href="https://codechef.com/"><img src={CC} alt="CodeChef" width='400' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:300}} elevation={3}>
      <a target="_blank" href="https://atcoder.jp/"> <img src={ATC} alt="AtCoder" width='300' height='200' /> </a>
      </Paper>
      </Stack>
     </Box>

     <Box sx={{ textDecoration: 'none',mt:4}}>

      <Stack direction='row' spacing={21}>

      <Paper  sx={{height:200,width:375}} elevation={3}>
       <a target="_blank" rel="noreferrer" href="https://hackerrank.com/"><img src={HR} alt="HackerRank" width='375' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:400}} elevation={3}>
      <a target="_blank" rel="noreferrer" href="https://hackerearth.com/"><img src={HE} alt="HackerEarth" width='400' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:300}} elevation={3}>
      <a target="_blank" rel="noreferrer" href="https://leetcode.com/"> <img src={LC} alt="LeetCode" width='300' height='200' /> </a>
      </Paper>
      </Stack>
     </Box>

    <Typography variant="h3" sx={{color:'blue'}} >UpComing Contests in this Week...</Typography>
    <br />
     
     <UpcomingContests/>
      
     <br /><br />
     
     <Practice/>
    </Box>
    </>
  )
}

export default Home
