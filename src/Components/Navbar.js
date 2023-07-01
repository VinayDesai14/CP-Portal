import { Menu, MenuItem } from '@mui/material'
import { AppBar, Box, Toolbar, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

  const [flag, setFlag] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, px: 7 }}>

        <AppBar position="static" color="secondary">

          <Toolbar sx={{ spacing: 5 }}>

            <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

            <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>ToDoList</Button>

            <Button component={NavLink} to='/contests' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contests</Button>

            <Button component={NavLink} to='/loginorsignup' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none', marginLeft: 'auto' }}>Login/SignUp</Button>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
