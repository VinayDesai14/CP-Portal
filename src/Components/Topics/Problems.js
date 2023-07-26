import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";

function Problems(props) {
  
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const [cnt, setCnt] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading]=useState(false);
  const [problemset, setProblemsset] = useState([]);
  const [savedproblems,setSavedProblems]=useState([]);
  const [pdata,setPData]=useState([]);
  const[currEmail,setcurrEmail]=useState("");

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
  async function SavedData(){
    const email=user.email;
    setcurrEmail(user.email);
    try{

      Axios.post("http://localhost:8000/todolistcheck",{
          email
      })
      .then(res=>{
        console.log(res);
        setPData(res.data);
        pdata.map((data,idx)=>{
          const {name}=data;
          saveInLocal(name);
        })
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
async function saveInLocal(name){
  localStorage.setItem(name,name);
  console.log("problem Saved locally");
}
async function setData(name,link){
    const email=user.email;
    try{

      await Axios.post("http://localhost:8000/todolistdata",{
          email,link,name
      })
      .then(res=>{
        if(res.data==="exist"){
            console.log("Problem already saved");
          }
          else if(res.data==="notexist"){
            setSavedProblems([...savedproblems,name]);
            localStorage.setItem(name, JSON.stringify(name));
            console.log("Problem saved successfully");
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
  async function DelProb(name){
    const email=user.email;
    try{

      await Axios.post("http://localhost:8000/todolistremove",{
          email,name
      })
      .then(res=>{
        if(res.data==="success"){
          setSavedProblems((problemName) => problemName.filter((id) => id !== name));
          console.log(name);
          localStorage.removeItem(name);
          
          
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
   if(isAuthenticated)
   SavedData();
   else
   localStorage.clear();
  },[isAuthenticated,currEmail]);

  useEffect(() => {
    const url = `https://codeforces.com/api/problemset.problems?tags=${props.topic}`;
    setIsLoading(true);
        Axios.get(url).then((response) => {
      const start = (page - 1) * 15;
      const end = (page) * 15;
      setCnt(response.data.result.problems.length);
      setProblemsset((response.data.result.problems).slice(start, end));
      
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
    
  }, [page,props.topic])

  const problems=(
    <>
    {
      problemset.map((data, idx) => {
        const { name, contestId, index} = data;
        return (
          <Grid container spacing={2} sx={{ border: 2,mt:2,height:200}} key={idx}>
            <Grid  lg={6} md={12} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography component='span' variant='h5' >{name}</Typography>
            </Grid>
            <Grid  lg={3} md={6} xs={12} sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant='outlined' href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>
            </Grid>
            <Grid lg={3} md={6} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              
            
            {isAuthenticated ?(
              <>
              {localStorage.getItem(name)?<Button sx={btnProps} variant='outlined' onClick={()=>DelProb(name)}>Remove</Button>
                 : <Button sx={btnProps} variant='outlined' onClick={()=>setData(name,`https://codeforces.com/problemset/problem/${contestId}/${index}`)}>Save</Button>
              } 
              </>
             ):<Button sx={btnProps} variant='outlined' onClick={() => loginWithRedirect()}>Save</Button>   
            }
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
   <Pagination
     sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}
     count={Math.ceil(cnt / 15)}
     color="secondary"
     size='large'
     onChange={(e, value) => setPage(value)}
   />
   </>
  )
}

export default Problems
