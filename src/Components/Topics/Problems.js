import { Box, Button, Grid, IconButton, Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth0 } from "@auth0/auth0-react";

function Problems(props) {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const [cnt, setCnt] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading]=useState(false);
  const [problemset, setProblemsset] = useState([]);
  const btnProps = {
    ':hover': {
      bgcolor: 'green', // theme.palette.primary.main
      color: 'white',
    },
    color: 'green',
    marginRight: 4,
  }
  const [isSaved, setIsSaved] = useState({});
  async function setData(name,link){
    // setIsSaved({
    //   ...isSaved,
    //   [name]: !isSaved[name],
    // });
    const email=user.email;
    try{

      await Axios.post("http://localhost:8000/todolistdata",{
          email,link,name
      })
      .then(res=>{
        if(res.data==="exist"){
            alert("Problem already saved");
            setIsSaved({
              ...isSaved,
              [name]: true,
            });
          }
        else if(res.data==="notexist"){
          alert("Problem saved successfully");
          setIsSaved({
            ...isSaved,
            [name]: true,
          });
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
          <Grid container spacing={2} sx={{ border: 2,mt:2,height:150}} key={idx}>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ mt: 5 }}>
              <Typography component='span' variant='h5' >{name}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={10} xs={10} sx={{ mt: 5 }}>
              <Button variant='outlined' href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={2} sx={{ mt: 5 }}>
            {isAuthenticated ?(
                 <>
                 {isSaved[name]?<Button sx={btnProps} variant='outlined' >Remove</Button>
                 : <Button sx={btnProps} variant='outlined' onClick={()=>setData(name,`https://codeforces.com/problemset/problem/${contestId}/${index}`)}>Save</Button>} 
                 </>
                ):<Button sx={btnProps} variant='outlined' onClick={() => loginWithRedirect()}>Save</Button>
                
                }
            </Grid>
            {/* <>
                 {isSaved[name]?<Button sx={btnProps} variant='outlined' onClick={() => loginWithRedirect()}>Remove</Button>
                 : <Button sx={btnProps} variant='outlined' onClick={()=>setData(name,`https://codeforces.com/problemset/problem/${contestId}/${index}`)}>Save</Button>} 
                 </> */}
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
     color="primary"
     size='large'
     onChange={(e, value) => setPage(value)}
   />
   </>
  )
}

export default Problems
