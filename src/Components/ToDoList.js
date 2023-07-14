<<<<<<< HEAD
import React, { useState } from 'react';
import Axios from 'axios';
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'


function ToDoList() {
  const {user} = useAuth0();
  const email=user.email;
  const [cnt, setCnt] = useState(0);
  const [page, setPage] = useState(1);
  const [problemSet,setProblemSet]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const btnProps = {
    ':hover': {
      bgcolor: 'green', // theme.palette.primary.main
      color: 'white',
    },
    color: 'green',
    marginRight: 6,
  }

  
 

  useEffect(()=>{
    setIsLoading(true);
    const start = (page - 1) * 15;
  const end = (page) * 15;
    Axios.post("http://localhost:8000/todolist",{
      email
  })
  .then(res=>{
    setProblemSet(res.data.slice(start, end));
    setCnt(res.data.length);
    setIsLoading(false);
  })
  .catch(e=>{
      console.log(e);
      setIsLoading(false);
  })
    
  
     },[page])
=======
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";
function ToDoList() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  const email=user.email;
  Axios.post("http://localhost:8000/todolist",{
        email
  })
  .then(res=>{
      console.log(res.data);
    })
    .catch(e=>{
        alert("wrong details");
        console.log(e);
    })
  
  return (
    <div>
>>>>>>> ea95597497a0a4a2ffff8f5ca7e3958457ac845a
      
    const problems=(
      <>
      {
        problemSet.map((data, idx) => {
          const {link,name} = data;
  
          return (
            <Grid container spacing={2} sx={{ border: 2,mt:2,height:150}} key={idx}>
              <Grid item lg={7} md={7} sm={12} xs={12} sx={{ mt: 5 }}>
                <Typography component='span' variant='h5' >{name}</Typography>
              </Grid>
              <Grid item lg={4} md={4} sm={10} xs={10} sx={{ mt: 5 }}>
                <Button variant='outlined' href={link} sx={btnProps} target='_blank'>Solve Problem</Button>
              </Grid>
              <Grid item lg={1} md={1} sm={2} xs={2} sx={{ mt: 5 }}>
        
                <Button sx={btnProps} variant='outlined' >Remove</Button>
                  
              </Grid>
            </Grid>
          )
        })
      }
    </>
    );


  return (
    <Box sx={{flexGrow: 1,px:7}}>
       {isLoading?<Box sx={{mt:4,mb:4,display: 'flex',alignItems:'center', justifyContent: 'center'}}>
     <CircularProgress />
   </Box>:problems}
   
   <Pagination
     sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}
     count={Math.ceil(cnt / 15)}
     color="primary"
     size='large'
     onChange={(e, value) => setPage(value)}
   />
    </Box>
  )
}

<<<<<<< HEAD
export default withAuthenticationRequired(ToDoList);
=======
export default withAuthenticationRequired(ToDoList,{
  returnTo: '/'
});
>>>>>>> ea95597497a0a4a2ffff8f5ca7e3958457ac845a
