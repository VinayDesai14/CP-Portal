/* eslint-disable no-unused-vars */
import { Box, Stack, TableRow } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Practice extends Component{
    constructor(){
        super();
        this.state={
            problems:this.problems,
            loading:false
        }
    }
   async componentDidMount(){
       let data = await fetch('https://codeforces.com/api/problemset.problems')
        let parData=await data.json();
        this.setState({problems:parData.problems});
    }
    render() {
        return(
            <Box>
                <Stack direction="row" spacing={140}>
                    <Box>
                      <Box>
                      {this.state.problems?.map((Element)=>{
                        return <div key={Element.url}>
                           <problems name={Element.name}/>
                        </div>
                      }
                      )
                      }
                      </Box>
                    </Box>
                    <Box>
                        <FormGroup>
                        <h3>Difficulty:</h3>
                            <FormControlLabel  control={<Checkbox defaultChecked />} label="800-1000" />
                            <FormControlLabel  control={<Checkbox />} label="1000-1200" />
                            <FormControlLabel  control={<Checkbox />} label="1200-1400" />
                            <FormControlLabel  control={<Checkbox />} label="1400-1600" />
                            <FormControlLabel  control={<Checkbox />} label="1600-1800" />
                            <FormControlLabel  control={<Checkbox />} label="1800-2000" />
                        </FormGroup>
                    </Box>
                </Stack>

            </Box>
        
        )
    }

}

export default Practice
