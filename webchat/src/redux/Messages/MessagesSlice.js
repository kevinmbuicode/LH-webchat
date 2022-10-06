
import {createSlice,current } from "@reduxjs/toolkit"


const initialState= {
    messages:[]
}

const messagesSlice= createSlice({
name:"messages",
initialState,
reducers:{
    storeMessage:(state, action)=>{
        const message=action.payload.message
      
   state.messages.push(message)
   const spread = current(state).messages
if(localStorage.getItem('messages')===null){
    return 
}
   const item=localStorage.getItem("messages")
   const itemArray=item.split(',')
  console.log(itemArray)
   itemArray.push(spread)
  
       localStorage.setItem("messages", itemArray)
    }
    
},
prepare: ({message})=>{
    //change the payload
    return {
        payload:{
message
}}
}


})



export const {storeMessage}=messagesSlice.actions

export default messagesSlice.reducer