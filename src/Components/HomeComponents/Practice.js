import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BinarySearch from '../Topics/BinarySearch';
import BitMasks from '../Topics/BitMasks';
import Defaults from '../Topics/Defaults';
import Dp from '../Topics/Dp';
import Sorting from '../Topics/Sorting';
import Greedy from '../Topics/Greedy';
import Strings from '../Topics/Strings';
import Trees from '../Topics/Trees';
import Graphs from '../Topics/Graphs';
import TwoPointers from '../Topics/TwoPointers';
import Math from '../Topics/Math';
import Problems from '../Topics/Problems';

function Practice() {
   
    const [topic, setTopic] = useState('');

  const handleChange = (event) => {
    setTopic(event.target.value);
    console.log(event.target.value)
  };


    return (
        <>
            <Box>
            <Stack direction='row' spacing={7}>
            <Typography variant="h3" sx={{color:'green'}} >Practice Problems...</Typography>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={topic}
          onChange={handleChange}
          autoWidth
          label="Topic"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="binary%20search">Binary Search</MenuItem>
          <MenuItem value="bitmasks">Bit masks </MenuItem>
          <MenuItem value="dp">Dp</MenuItem>
          <MenuItem value="graphs">Graphs</MenuItem>
          <MenuItem value="greedy">Greedy</MenuItem>
          <MenuItem value="math">Math</MenuItem>
          <MenuItem value="strings">Strings</MenuItem>
          <MenuItem value="sortings">Sorting</MenuItem>
          <MenuItem value="trees">Trees</MenuItem>
          <MenuItem value="two%20pointers">Two Pointers</MenuItem>
        </Select>
        
      </FormControl>
      </Stack>
      <Problems topic={topic}/>
        {/* {topic===''?<Defaults/>:null}
         {topic==='binary%20search'?<BinarySearch/>:null}
         {topic==='bitMasks'?<BitMasks/>:null}
         {topic==='dp'?<Dp/>:null}
         {topic==='graphs'?<Graphs/>:null}
         {topic==='greedy'?<Greedy/>:null}
         {topic==='math'?<Math/>:null}
         {topic==='strings'?<Strings/>:null}
         {topic==='sortings'?<Sorting/>:null}
         {topic==='trees'?<Trees/>:null}
         {topic==='two%20pointers'?<TwoPointers/>:null} */}
         
        </Box>
    </>
)}
export default Practice
