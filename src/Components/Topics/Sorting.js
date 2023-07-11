import {  Button, Grid, Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

function Sorting() {

  const [cnt,setCnt]=useState(0);
  const [page, setPage] = useState(1);
  const url = "https://codeforces.com/api/problemset.problems?tags=sortings";
  const [problemset, setProblemsset] = useState([]);
  const btnProps = {
    ':hover': {
      bgcolor: 'green', // theme.palette.primary.main
      color: 'white',
    },
    color: 'green',
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

  return (
   <>
    {
      problemset.map((data, idx) => {
        const { name, contestId, index } = data;
        return (
          <Grid container spacing={2} sx={{border:2,mt:2,height:100}}>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{mt:2}}>
              <Typography component='span' variant='h5' >{name}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={10} xs={10} sx={{mt:2}}>
              <Button variant='outlined' href={`https://codeforces.com/problemset/problem/${contestId}/${index}`} sx={btnProps} target='_blank'>Solve Problem</Button>
            </Grid>
            <Grid item lg={1} md={1} sm={2} xs={2} sx={{mt:2}}>
              <TurnedInNotIcon />
            </Grid>
          </Grid>
        )
      })
    }
    <Pagination
       sx={{mt:4,display:'flex',alignItems:'center',justifyContent:'center',mb:2}}
            count={Math.ceil(cnt/15)}
            color="primary" 
            size='large'
            onChange={(e, value) => setPage(value)}
          />
  </>
  
  )
}

export default Sorting
