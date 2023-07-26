import React, { useState } from 'react';
import Axios from 'axios';
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import { remove } from '../Features/problemsSlice';
import { useDispatch, useSelector } from 'react-redux';

function ToDoList() {
  const {user} = useAuth0();
  const email=user.email;
  const [cnt, setCnt] = useState(0);
  const [page, setPage] = useState(1);
  const [problemSet,setProblemSet]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const isSaved=useSelector((state)=>state.problems.isSaved);
  const dispatch=useDispatch();

  const btnProps = {
    ':hover': {
      bgcolor: '#03b6fc', // theme.palette.primary.main
      color: 'white',
    },
    color: 'white',
    marginRight: 4,
    marginLeft: 4,
    display:'block',
    width:'100%',
    textAlign:'center',
    borderColor:'white',
  }

  async function DelProb(name){
    const email=user.email;
    try{

      await Axios.post("http://localhost:8000/todolistremove",{
          email,name
      })
      .then(res=>{
        if(res.data==="success"){
          localStorage.removeItem(name);
          dispatch(remove(name));
            console.log("Problem removed successfully")
          }
        else if(res.data==="fail"){
          alert("Couldn't remove the problem")
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
  },[page,isSaved])

      
    const problems=(
      <>
      {
        problemSet.map((data, idx) => {
          const {link,name} = data;
  
          return (
            <>

            <Grid container spacing={2} sx={{ border: 2,borderColor:'white',mt:2,height:200}} key={idx}>
            <Grid  lg={6} md={12} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography component='span' variant='h5' sx={{color:'white'}} >{name}</Typography>
            </Grid>
            <Grid  lg={3} md={6} xs={12} sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant='outlined' href={link} sx={btnProps} target='_blank'>Solve Problem</Button>
            </Grid>
            <Grid lg={3} md={6} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              
            <Button sx={btnProps} variant='outlined' onClick={()=>DelProb(name)}>Remove</Button>
             
            </Grid>
          </Grid>
            </>
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

export default withAuthenticationRequired(ToDoList);
