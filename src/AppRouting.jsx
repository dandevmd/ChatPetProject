import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.config';

import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';


const AppRouting = () => {
    const [user]= useAuthState(auth)
    console.log(user)

    return user
        ? (
            <Routes>
                <Route path='/chat' element={<Chat />} />
                <Route
                    path="*"
                    element={<Navigate to="/chat" replace />}
                />
            </Routes>    
        )
        : (
            <Routes>

                <Route path='/login' element={<Login />} />

                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        )
}

export default AppRouting