import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'


import './navigation.css'

const Navigation = () => {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className="nav">
      <div className="nav-logo-div">
        <Link to='/' className='nav-logo'>CHAT_APP_LOGO</Link>
      </div>

      <div className="nav-links">
        {user
          ? (<Link to='/' className="nav-link" onClick={() => { signOut(auth) }}>
            <button> Logout</button>
          </Link>)
          : (<Link to='/login' className="nav-link">
            <button>Login </button>
          </Link>)
        }
      </div>
    </div>
  )
}

export default Navigation