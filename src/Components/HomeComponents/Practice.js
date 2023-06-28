import { Box, Stack } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

function Practice() {
    return (
        <>
            <Box>
                <Stack direction="row" spacing={140}>
                    <Box>
                      <Box>
                        <Link to='https://codeforces.com/problemset'>problemset</Link>
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
        </>
    )
}

export default Practice
