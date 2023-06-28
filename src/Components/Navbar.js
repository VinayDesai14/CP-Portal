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
    <Box sx={{ flexGrow: 1,px:7}}>
      <AppBar  position="static" color="primary" >
        <Toolbar sx={{spacing:10}}>
            
           <img src={logo} alt='logo' height='55px'  style={{paddingRight:'20px'
          }} />
           
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>ToDoList</Button>
            
           <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button sx={{ color: 'white', textTransform: 'none' }} {...bindTrigger(popupState)}>
       Contests
       <KeyboardArrowDownIcon/>
      </Button>
      <Menu {...bindMenu(popupState)}>
      <MenuItem onClick={popupState.close}><Link to='/contests/codeforces' style={{textDecoration:'none'}}>CodeForces</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to='/contests/codechef' style={{textDecoration:'none'}}>CodeChef</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to='/contests/atcoder' style={{textDecoration:'none'}}>AtCoder</Link></MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>

          <Button   component={NavLink} to='/loginorsignup' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none',marginLeft:'auto'}}>Login/SignUp</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Navbar
