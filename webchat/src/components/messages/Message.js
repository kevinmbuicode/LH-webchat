import React,{useEffect, useState} from "react";
import { useSelector} from 'react-redux'
import {v4 as uuid} from 'uuid'

const Message = () => {
  const [items, setItems] = useState([]);
  const [ loading, setLoading] = useState(false)
  const messages= useSelector((state)=>state.messages)
  const user= useSelector((state)=>state.user)



  setTimeout(() => {
    
      const items = localStorage.getItem("messages")
   
     
      const itemsArray=items.split(',')
  
     setItems(itemsArray)
  
  }, 1000)

  // useEffect(()=> {

  //   const items = localStorage.getItem("messages")
   
  //    const itemsArray=items.split(',')
  
  //    setItems(itemsArray)
   
     
  // }, [messages])

  return (
    <div className="message owner">
      <div className="messageContent">
        {items.map(message => {
        return( <div style={{display:'flex',flexDirection:"row-reverse"}} key={uuid}>
        <p>{message}
       </p>
       <p style={{
         backgroundColor:'transparent',
         color: "grey", 
         borderRadius: 0,
       height:5,
         fontSize: 12,
         marginBottom:'20px',
         paddingTop:25,
         paddingRight: 3,
         
       }}>{user.user}</p>
        </div> )
        
      
        })}
      </div>
    </div>
  );
};

export default Message;