import React,{useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/chat/Chat';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'


const Home = () => {
  const { search } = useLocation();
  const name = new URLSearchParams(search)
  const user=name.get('name')
  const dispatch= useDispatch()
  
  useEffect(() => {
   dispatch(setUser({user:user}))
    
  }, [user])


  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home;