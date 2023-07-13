import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";
function ToDoList() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  const email=user.email;
  Axios.post("http://localhost:8000/todolist",{
        email
  })
  .then(res=>{
      console.log(res.data);
    })
    .catch(e=>{
        alert("wrong details");
        console.log(e);
    })
  
  return (
    <div>
      
    </div>
  )
}

export default withAuthenticationRequired(ToDoList,{
  returnTo: '/'
});
