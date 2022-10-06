import React, { useRef } from 'react'
//import inputIcons from '../images/addImage.png';
import { useSelector,useDispatch } from 'react-redux'
import { storeMessage } from '../redux/Messages/MessagesSlice'
const Input = () => {

  
  const dispatch= useDispatch()
  const[message,setMessage]=React.useState('')

  const handleClick = () => {
    if(localStorage.getItem('messages') === null){
          localStorage.setItem('messages',"hello from from admin")
        }
   
   setMessage('')
    return dispatch(storeMessage({message:message}))
    
  }

  
  return (
    <div className="input">
      <input onKeyPress={(e)=>{e.key==='Enter' && handleClick()}} type="text" placeholder="Type something..." value={message}
      onChange={(e)=>{setMessage(e.target.value)}}
      />
      <div className="send">
        <img src="" alt="Input Icon" height="24px"/>
        <input type="file" style={{ display: "none"}} id="file"/>
        <label htmlFor="file">
          <img src="" alt="" height="24px"/>
        </label>
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  )
}

export default Input;