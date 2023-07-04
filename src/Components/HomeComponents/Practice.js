import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
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

function Practice() {
   
    const [topic, setTopic] = React.useState('');

  const handleChange = (event) => {
    setTopic(event.target.value);
  };


    return (
        <>
            <Box sx={{color:'white'}}>
            <Stack direction='row' spacing={7}>
            <Typography variant="h4" sx={{color:'white',fontFamily:"'Girassol', cursive"}} >Practice Problems</Typography>
            <FormControl sx={{ m: 1, minWidth: 80 ,color:'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{color:'white'}}>Topic</InputLabel>
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
          <MenuItem value="BinarySearch">Binary Search</MenuItem>
          <MenuItem value="BitMasks">Bit masks </MenuItem>
          <MenuItem value="Dp">DP</MenuItem>
          <MenuItem value="Graphs">Graphs</MenuItem>
          <MenuItem value="Greedy">Greedy</MenuItem>
          <MenuItem value="Math">Math</MenuItem>
          <MenuItem value="Strings">Strings</MenuItem>
          <MenuItem value="Sorting">Sorting</MenuItem>
          <MenuItem value="Trees">Trees</MenuItem>
          <MenuItem value="TwoPointers">Two Pointers</MenuItem>
        </Select>
      </FormControl>
      </Stack>
         
        {topic===''?<Defaults/>:null}
         {topic==='BinarySearch'?<BinarySearch/>:null}
         {topic==='BitMasks'?<BitMasks/>:null}
         {topic==='Dp'?<Dp/>:null}
         {topic==='Graphs'?<Graphs/>:null}
         {topic==='Greedy'?<Greedy/>:null}
         {topic==='Math'?<Math/>:null}
         {topic==='Strings'?<Strings/>:null}
         {topic==='Sorting'?<Sorting/>:null}
         {topic==='Trees'?<Trees/>:null}
         {topic==='TwoPointers'?<TwoPointers/>:null}
        </Box>
    </>
)}
export default Practice
