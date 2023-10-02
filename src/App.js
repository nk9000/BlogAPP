
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cp from './pages/Cp';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isAuth , SetisAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut =()=> {
    signOut(auth).then(()=>{
      //we want to clear our local storage
      localStorage.clear()
      SetisAuth(false);
      // now i want to redirect to login page so import usenavigate in app.js also
      window.location.pathname = "/login"

    })
  }
  return (
    

    <div className="App">



      <Router>
      <nav>
        <Link to="/"><h1>Home</h1></Link>
        {!isAuth ? <Link to="/login">Login</Link> : <> <Link to="/createpost"><h1>CreatePost</h1></Link>  <button className='logout' onClick={signUserOut}>Logout</button>  </>}
        

      </nav> 
        <Routes>
          <Route path='/' element = {<Home isAuth={isAuth}/>} />
          <Route path='/createpost' element = {<Cp isAuth={isAuth}/>} />
          <Route path='/login' element = {<Login SetisAuth={SetisAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
