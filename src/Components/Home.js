import React from 'react'
import Paper from '@mui/material/Paper';
import { Box,  Stack, Typography } from '@mui/material';
import Practice from './HomeComponents/Practice';
import CF from '../Images/codeforces.jpeg'
import CC from '../Images/codechef.png'
import ATC from '../Images/atcoder.png'
import HR from '../Images/hackerrank.png'
import HE from '../Images/hackerearth.jpeg'
import LC from '../Images/leetcode.png'



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
      <br /><br />
     <Practice/>
    </Box>
    </>
  )
}

export default Home
