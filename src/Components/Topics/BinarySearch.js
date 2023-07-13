/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
function BinarySearch() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  async function setData(name,link){
    const email=user.email;
    try{

      await Axios.post("http://localhost:8000/todolistdata",{
          email,link,name
      })
      .then(res=>{
        if(res.data==="exist"){
            alert("Problem already saved");
          }
        else if(res.data==="notexist"){
          alert("Problem saved successfully");
        }
      })
      .catch(e=>{
          alert("wrong details");
          console.log(e);
      })

  }
  catch(e){
      console.log(e);
  }
  }
  
  const url = "https://codeforces.com/api/problemset.problems?tags=binary%20search";
  const [problemset, setProblemsset] = useState([]);
  const btnProps = {
    ':hover': {
      bgcolor: 'green', // theme.palette.primary.main
      color: 'white',
    },
    color: 'white',
    marginRight: 4,
  }
  useEffect(() => {
    Axios.get(url).then((response) => {
      setProblemsset(response.data.result.problems);
    }).catch((err) => {
      console.log(err);
    })

  }, [])

  //  console.log(problemset.contestId);
  //  const problemLink=`https://codeforces.com/problemset/problem/${problemset.problems.contestId}`
  return (
    <>


      {
        problemset.map((data, idx) => {
          const { name, contestId, index } = data;
          return (
            <Grid container spacing={2} sx={{border:2,mt:2,height:100,color:"white"}}>
              <Grid item lg={7} md={7} sm={12} xs={12} sx={{mt:2,fontFamily:"'Girassol', cursive"}}>
                <Typography component='span' variant='h5' sx={{fontFamily:"'Girassol', cursive"}} >{name}</Typography>
              </Grid>
              <Grid item lg={4} md={4} sm={10} xs={10} sx={{mt:2,color:"white"}}>
                <Button variant='outlined' href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>
              </Grid>
              <Grid item lg={1} md={1} sm={2} xs={2} sx={{mt:2}}>
                {isAuthenticated ?(
                  <Button onClick={()=>setData(name,`https://codeforces.com/problemset/problem/${contestId}/${index}`)}>save</Button>
                ):
                  <Button onClick={() => loginWithRedirect()}>Save</Button>
                }
              </Grid>
            </Grid>


          )
        })
      }
      {/* <Box key={idx} sx={{border:2,mt:2,height:100,display:'flex'}}>
              
              <Typography component='span' variant='h5' >{name}</Typography>
              
              <Box component='span' sx={{float:'right',display:'flex',alignItems:'center'}}>

              <Button href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>

              <BookmarkIcon/>
              </Box>
            </Box> */}
    </>
  )
}

export default BinarySearch
