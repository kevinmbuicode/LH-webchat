import {configureStore} from "@reduxjs/toolkit"

import messagesSlice from './redux/Messages/MessagesSlice'
import userSlice from './redux/user/userSlice'


 const store= configureStore({reducer:{

    
messages:messagesSlice,
user:userSlice



 }})
 export default store