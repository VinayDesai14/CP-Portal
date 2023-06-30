/* eslint-disable no-unused-vars */
import { Icon, Menu, MenuItem } from '@mui/material'
import { AppBar, Box, Toolbar, Button,Avatar} from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from './logo.ico';
import { alignProperty } from '@mui/material/styles/cssUtils';

function Navbar() {

   const [flag,setFlag]=useState(false);

   
  return (
    <>
    <Box sx={{ flexGrow: 1,px:7,padding:'0px'}}>
      <AppBar  position="static" color="primary" sx={{backgroundImage:'linear-gradient(to right, #70aeb5, #31cdcd, #00b9a2, #12ebb2)'}} >
        <Toolbar sx={{spacing:10}}>
            
           <img src={logo} alt='logo' height='55px'  style={{paddingRight:'30px'
          }} />
           
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px' }} className='dim pointer'>Home</Button>

          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px' }} className='dim pointer'>ToDoList</Button>

          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',paddingRight:'20px' }} className='dim pointer'>Contest</Button>

          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none' , paddingRight:'20px'}} className='dim pointer'>Favorite</Button>

          <Button   component={NavLink} to='/loginorsignup' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',marginLeft:'auto',textDecoration:'underline'}} className='dim pointer'>Login/SignUp</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Navbar
