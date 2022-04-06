import React, { useRef, useEffect } from 'react'
import { doc, deleteDoc} from 'firebase/firestore'
import { db } from '../../firebase.config'

import './message.css'

const Message = ({ msg, user}) => {

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [msg])


  const deleteMessage = async () => {
    const docRef = doc(db, 'messages', msg.id)
    await deleteDoc(docRef)
  }

  

  return (
    <div className="m" >
      <div className='m-container'
        style={{
          backgroundColor: msg.data.uid === user.uid ? '#A32cc4' : '#a1045a'
        }}
      >
        <div className="m-credential">
          <img src={msg.data.photoURL} alt="" />
          <h3>{msg.data.displayName}</h3>
      <button onClick={deleteMessage} className='del-btn'>X</button>
        </div>
        <p>{msg.data.text}</p>
      </div>
      <div ref={messagesEndRef} className="tupoi-div"></div>
    </div>
  )
}

export default Message