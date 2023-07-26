/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Home from './Components/Home';
import ToDoList from './Components/ToDoList';
import SendPasswordResetEmail from './Components/SendPasswordResetEmail';
import ResetPassword from './Components/ResetPassword';
import Contests from './Components/Contests';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='todolist' element={<ToDoList/>}/>
        <Route path='contests' element={<Contests/>}/>
      </Route>
      <Route path='/sendpasswordresetemail' element={<SendPasswordResetEmail/>}/>
      <Route path='/resetpassword' element={<ResetPassword/>}/>
    </Routes>
    </>
    
  );
}

export default App;
