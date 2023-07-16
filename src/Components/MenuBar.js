import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button,} from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import CloseIcon from '@mui/icons-material/Close';
function MenuBar() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const btnProps = {
        ':hover': {
          color: 'blue',
        },
        color:'white',fontFamily:"'Girassol', cursive",textTransform:'none'
    
      }

      
    return (
      <React.Fragment>
        <Drawer
          anchor="top"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <List sx={{backgroundColor:'black'}}>
          <ListItem sx={{display:'flex',justifyContent:'right'}}>
              <Button   onClick={() => setOpenDrawer(!openDrawer)}  sx={btnProps} ><CloseIcon/></Button>
              </ListItem>
              <ListItem sx={{display:'flex',justifyContent:'center'}}>
              <Button  component={NavLink} to='/' onClick={() => setOpenDrawer(!openDrawer)} style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>Home</Button>
              </ListItem>
              <ListItem sx={{display:'flex',justifyContent:'center'}}>
              <Button  component={NavLink} to='/todolist' onClick={() => setOpenDrawer(!openDrawer)} style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>ToDoList</Button>
              </ListItem>
              <ListItem sx={{display:'flex',justifyContent:'center'}}>
              <Button component={NavLink} to='/contests' onClick={() => setOpenDrawer(!openDrawer)} style={({ isActive }) => { return { backgroundColor: isActive ? '' : '' } }} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}>Contests</Button>
              </ListItem>
              <ListItem sx={{display:'flex',justifyContent:'center'}}>
              {isAuthenticated ? (
  <Button component={NavLink} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}}  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
):
  <Button component={NavLink} sx={{ color: 'white', textTransform: 'none', paddingRight:'20px',fontFamily:"'Girassol', cursive",fontSize:18}} onClick={() => {loginWithRedirect()}} >Log In</Button>
}
              </ListItem>
          </List>
        </Drawer>
        <IconButton
          sx={{ color: "white", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon color="white" />
        </IconButton>
      </React.Fragment>
    );
}

export default MenuBar
