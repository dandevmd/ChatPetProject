import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { auth } from '../../firebase.config';
import { ReactComponent as GoogleIcon } from '../../images/googleIcon.svg'


import './login.css'

const Login = () => {

  const logIn = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider)
    console.log(user)
  }

  return (
    <div className="log-container">
      <GoogleIcon className='google__icon'/>
      <button onClick={logIn}>Log In with Google</button>
    </div>
  )
}

export default Login