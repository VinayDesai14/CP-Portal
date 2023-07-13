/* eslint-disable no-unused-vars */
import { Icon, Menu, MenuItem } from '@mui/material'
import { AppBar, Box, Toolbar, Button,Avatar} from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from './logo.ico';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

   const [flag,setFlag]=useState(false);
   const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
   
  return (
    <>
    <Box sx={{ flexGrow: 1,px:7,padding:'0px'}}>
      <AppBar  position="static" color="primary" sx={{backgroundImage:'linear-gradient(to right, #434343 0%, black 100%);'}} >
        <Toolbar sx={{spacing:10}}>
            
           <img src={logo} alt='logo' height='55px'  style={{paddingRight:'30px'
          }} />
           
          <Button className='home' component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>Home</Button>

          {isAuthenticated ? (
          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none' , paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>ToDoList</Button>
          ):
            <button onClick={() => loginWithRedirect()}>ToDoList</button>
          }
          <Button component={NavLink} to='/contests' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',paddingRight:'20px',fontFamily:"'Girassol', cursive" ,fontSize:18}} className='dim pointer'>Contests</Button>

          <Button component={NavLink} to='/todolist' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none' , paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>Favorite</Button>

          {/* <Button   component={NavLink} to='/loginorsignup' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',marginLeft:'auto',textDecoration:'underline',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>Login/SignUp</Button> */}
          {/* <Button onClick={() => loginWithRedirect()} component={NavLink} to='/loginorsignup' style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none',marginLeft:'auto',textDecoration:'underline',fontFamily:"'Girassol', cursive",fontSize:18}} className='dim pointer'>Login/SignUp</Button> */}
          {isAuthenticated && (<p>{user.name}</p>)}
          {isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
          ):
            <button onClick={() => loginWithRedirect()}>Log In</button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Navbar
