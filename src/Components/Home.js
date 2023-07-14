/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react'
import Paper from '@mui/material/Paper';
import { Box,  Stack, Typography } from '@mui/material';
import Practice from './HomeComponents/Practice';
import CF from '../Images/codeforces.jpeg'
import CC from '../Images/codechef.png'
import ATC from '../Images/atcoder.png'
import HR from '../Images/hackerrank.png'
import GFG from '../Images/gfg.jpeg'
import LC from '../Images/leetcode.png'



function Home() {
  return (
    <>
      <h2 style={{color:"white" ,marginLeft:'50px',marginTop:'10px'}}>Top CP Websites</h2>
     <Box sx={{mx:7,mt:4}}>

     <Box sx={{ textDecoration: 'none'}}>

      <Stack direction='row' spacing={21}>

      <Paper  sx={{height:200,width:350}} elevation={3}>
       <a  href="https://codeforces.com/"><img src={CF} alt="CodeForces" width='350' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:350}} elevation={3}>
      <a  href="https://codechef.com/"><img src={CC} alt="CodeChef" width='350' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:350}} elevation={3}>
      <a  href="https://atcoder.jp/"> <img src={ATC} alt="AtCoder" width='350' height='200' /> </a>
      </Paper>
      </Stack>
     </Box>

     <Box sx={{ textDecoration: 'none',mt:4}}>

      <Stack direction='row' spacing={21}>

      <Paper  sx={{height:200,width:350}} elevation={3}>
       <a  href="https://hackerrank.com/"><img src={HR} alt="HackerRank" width='350' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:350}} elevation={3}>
      <a  href="https://www.geeksforgeeks.org/"><img src={GFG} alt="GeeksforGeeks" width='350' height='200' /></a>
      </Paper>

      <Paper  sx={{height:200,width:350}} elevation={3}>
      <a  href="https://leetcode.com/"> <img src={LC} alt="LeetCode" width='350' height='200' /> </a>
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
