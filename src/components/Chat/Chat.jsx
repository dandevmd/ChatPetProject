import React, { useState, useEffect } from 'react'
import { auth, db } from '../../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { onSnapshot, query, addDoc, collection, serverTimestamp, orderBy,} from 'firebase/firestore'

import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'
import './chat.css'


const Chat = () => {
  const [user, loading] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [msgs, setMsgs] = useState([])


  console.log('msgs>>>>', msgs)

  useEffect(() => {
    const messagesRef = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    onSnapshot(messagesRef, (snapshot) => {
      setMsgs(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])


  const sendMessage = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp()
    })
    console.log(docRef)

    setValue('')
  }


  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className='ch-wind'>
        {msgs.map((msg) => (
          <Message
            user={user}
            key={msg.id}
            msg={msg}
          />
        ))}
      </div>

      <form className="ch-form" onSubmit={sendMessage}>
        <textarea
          value={value}
          className='ch-form-text'
          onChange={e => setValue(e.target.value)}
          placeholder='Enter your message here'
        />
        <button

          className='ch-form-btn'
        >
          Send
        </button>
      </form>
    </>
  )
}

export default Chat