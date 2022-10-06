import React from 'react'
import Messages from '../messages/Messages'
import Input from '../Input'
import { useLocation } from 'react-router-dom'
import { useSelector} from 'react-redux'


const Chat = () => {
  const user= useSelector((state)=>state.user)
 
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{user.user}</span>
        <div className='chatIcons'>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;