import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Home from './Components/Home';
import ToDoList from './Components/ToDoList';
import CodeForces from './Components/Contests/CodeForces';
import CodeChef from './Components/Contests/CodeChef';
import AtCoder from './Components/Contests/AtCoder';
import LoginSignUp from './Components/LoginSignUp';
import SendPasswordResetEmail from './Components/SendPasswordResetEmail';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='todolist' element={<ToDoList/>}/>
        <Route path='contests/codeforces' element={<CodeForces/>}/>
        <Route path='contests/codechef' element={<CodeChef/>}/>
        <Route path='contests/atcoder' element={<AtCoder/>}/>
        <Route path='loginorsignup' element={<LoginSignUp/>}/>
      </Route>
      <Route path='/sendpasswordresetemail' element={<SendPasswordResetEmail/>}/>
      <Route path='/resetpassword' element={<ResetPassword/>}/>
    </Routes>
    </>
    
  );
}

export default App;
