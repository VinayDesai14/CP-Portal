/* eslint-disable no-unused-vars */
import {  Menu, MenuItem } from '@mui/material'
import { AppBar, Box, Toolbar, Button,Avatar} from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.ico';
import { useAuth0 } from "@auth0/auth0-react";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuBar from './MenuBar';
import Axios from 'axios'
function Navbar() {
  
  const handleLogOut=()=>{
    // localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
   const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const btnProps = {
    ':hover': {
      color: 'blue',
    },
    color:'white',fontFamily:"'Girassol', cursive",textTransform:'none'

  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
const  handleLogin=()=>{
try{
    loginWithRedirect();
  // if(isAuthenticated)
  // SavedData();
}
catch(e){
  console.log(e);
}
}
  return (
    <>
    <Box sx={{ flexGrow: 1,px:7,padding:'0px',mt:1}}>

      <AppBar  position="static" color="primary" sx={{backgroundImage:'linear-gradient(to right, #434343 0%, black 100%);'}} >
        <Toolbar sx={{spacing:10}}>
            
           <img src={logo} alt='logo' height='55px'  style={{paddingRight:'30px'
          }} />
           
           {isMatch?<MenuBar/>:<><Button className='home' component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>Home</Button>

        
<Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none' , paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>ToDoList</Button>

<Button component={NavLink} to='/contests' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',paddingRight:'20px',fontFamily:"'Girassol', cursive" ,fontSize:18}} className='dim pointer'>Contests</Button>


{isAuthenticated ? (
  <Box sx={{display:'flex',justifyContent: 'flex-end',width:'100%'}}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
  <MenuItem  className='dim pointer' onClick={handleLogOut}>Log Out</MenuItem>

    </Menu>
  </Box>
):
<Box sx={{display:'flex',justifyContent: 'flex-end',width:'100%'}}>
  <Button sx={btnProps} onClick={handleLogin} className='dim pointer'>Log In</Button>
  </Box>

}</>}
          {/* <Button className='home' component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>Home</Button>

        
          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none' , paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>ToDoList</Button>
          
          <Button component={NavLink} to='/contests' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',paddingRight:'20px',fontFamily:"'Girassol', cursive" ,fontSize:18}} className='dim pointer'>Contests</Button>

      
          {isAuthenticated ? (
            <Box sx={{display:'flex',justifyContent: 'flex-end',width:'100%'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
            <MenuItem  className='dim pointer' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</MenuItem>
      
              </Menu>
            </Box>
          ):
          <Box sx={{display:'flex',justifyContent: 'flex-end',width:'100%'}}>
            <Button sx={btnProps} onClick={() => loginWithRedirect()} className='dim pointer'>Log In</Button>
            </Box>

          } */}

        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Navbar
