/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react'
import Paper from '@mui/material/Paper';
import { Box,  Grid,  Stack, Typography } from '@mui/material';
import Practice from './HomeComponents/Practice';
import CF from '../Images/codeforces.jpeg'
import CC from '../Images/codechef.png'
import ATC from '../Images/atcoder.png'
import HR from '../Images/hackerrank.png'
import GFG from '../Images/gfg.jpeg'
import LC from '../Images/leetcode.png'
import { styled } from '@mui/material/styles';


function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <>
      <h2 style={{color:"white" ,marginLeft:'50px',marginTop:'20px'}}>Top CP Websites</h2>
     <Box sx={{ml:7,mt:4,mr:7}}>

     <Grid container spacing={1} sx={{ textDecoration: 'none'}}>
       <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}} >
       <a  href="https://codeforces.com/"><img src={CF} alt="CodeForces" width='350' height='200' /></a>
    {/* <Item>   <a  href="https://codeforces.com/"><img src={CF} alt="CodeForces" width='350' height='200' /></a></Item>  */}
      </Grid>
      <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}}>
      <a  href="https://codechef.com/"><img src={CC} alt="CodeChef" width='350' height='200' /></a>
      {/* <Item sx={{ml:2}}> <a  href="https://codechef.com/"><img src={CC} alt="CodeChef" width='350' height='200' /></a></Item> */}
      </Grid>
      <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}} >
      <a  href="https://atcoder.jp/"> <img src={ATC} alt="AtCoder" width='350' height='200' /> </a>
      {/* <Item sx={{ml:2}}>  <a  href="https://atcoder.jp/"> <img src={ATC} alt="AtCoder" width='350' height='200' /> </a></Item> */}
      </Grid>
      <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}}>
      <a  href="https://hackerrank.com/"><img src={HR} alt="HackerRank" width='350' height='200' /></a>
      {/* <Item sx={{mt:2}}> <a  href="https://hackerrank.com/"><img src={HR} alt="HackerRank" width='350' height='200' /></a></Item> */}
       </Grid>
      <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}}>
      <a  href="https://www.geeksforgeeks.org/"><img src={GFG} alt="GeeksforGeeks" width='350' height='200' /></a>
      {/* <Item sx={{ml:2,mt:2}}> <a  href="https://www.geeksforgeeks.org/"><img src={GFG} alt="GeeksforGeeks" width='350' height='200' /></a></Item> */}
      </Grid>
      <Grid  lg={4} md={6} sm={12} sx={{mt:4,display:'flex',justifyContent:'center'}}>
      <a  href="https://leetcode.com/"> <img src={LC} alt="LeetCode" width='350' height='200' /> </a>
      {/* <Item sx={{ml:2,mt:2}}> <a  href="https://leetcode.com/"> <img src={LC} alt="LeetCode" width='350' height='200' /> </a></Item> */}
      </Grid>
      </Grid>
      </Box>
      <br /><br />
      <Box sx={{mx:7,mt:4}}>
     <Practice/>
     </Box>
    </>
  )
}

export default Home
