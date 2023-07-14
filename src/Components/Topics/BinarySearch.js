<<<<<<< HEAD
import { Box, Button, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import CircularProgress from '@mui/material/CircularProgress';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

function BinarySearch() {
  const [isLoading,setIsLoading]=useState(false);
  const [cnt,setCnt]=useState(0);
  const [page, setPage] = useState(1);
=======
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
  
>>>>>>> ea95597497a0a4a2ffff8f5ca7e3958457ac845a
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
      const start=(page-1)*15;
      const end=(page)*15;
      setCnt(response.data.result.problems.length);
      setProblemsset((response.data.result.problems).slice(start,end));
    }).catch((err) => {
      console.log(err);
    })

  }, [page])

  const problems=(
    <>
    {
      problemset.map((data, idx) => {
        const { name, contestId, index } = data;
        let isBookMarked=false;
        return (
          <Grid container spacing={2} sx={{ border: 2, mt: 2, height: 100 }}>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ mt: 2 }}>
              <Typography component='span' variant='h5' >{name}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={10} xs={10} sx={{ mt: 2 }}>
              <Button variant='outlined' href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={2} sx={{ mt: 2 }}>
            </Grid>
          </Grid>
        )
      })
    }
  </>
  );
  return (
    <>
     {isLoading?<Box sx={{mt:4,mb:4,display: 'flex',alignItems:'center', justifyContent: 'center'}}>
      <CircularProgress />
    </Box>:problems}

<<<<<<< HEAD
      <Pagination
       sx={{mt:4,display:'flex',alignItems:'center',justifyContent:'center',mb:2}}
            count={Math.ceil(cnt/15)}
            color="primary" 
            size='large'
            onChange={(e, value) => setPage(value)}
          />
            
=======

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
>>>>>>> ea95597497a0a4a2ffff8f5ca7e3958457ac845a
    </>
  )
}

export default BinarySearch
