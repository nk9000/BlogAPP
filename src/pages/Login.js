import React from 'react'

import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'


const Login = ({isAuth , SetisAuth}) => {
////////////////////////////////////////
let navigate = useNavigate();
const signin = () => {
signInWithPopup(auth,provider).then((res)=>{
  localStorage.setItem("isAuth" , true)
  SetisAuth(true);
  navigate("/");
})
{

}
}


///////////////////////////////////////
  return (
    <div className='container'>
    <div className='content'>
    <button onClick={signin}>Sign-In</button>
    </div>
    </div>

  )
}

export default Login