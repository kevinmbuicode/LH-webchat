
import {createSlice,current } from "@reduxjs/toolkit"

const initialState= {
   user:''
}

const userSlice= createSlice({
name:"user",
initialState,
reducers:{
    setUser:(state, action)=>{
        const user=action.payload.user
      
   state.user=user
   console.log(current(state).user)
  
    localStorage.setItem("user", current(state).user)
    }
    
},
prepare: ({user})=>{
    //change the payload
    return {
        payload:{
user
}}
}


})



export const {setUser}=userSlice.actions

export default userSlice.reducer