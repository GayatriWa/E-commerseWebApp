import React, { useEffect } from 'react'
// import axios from "./api/axiosconfig"
import {asynccurrentuser} from './store/actions/userActions'
import {useDispatch} from 'react-redux'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  const dispatch = useDispatch()

  useEffect (()=>{
     dispatch(asynccurrentuser())
  },[])
  return (
    <div className='w-screen h-screen text-white front-thin bg-gray-800 px-[10%]'>
      <Nav />
      <Mainroutes/>
    </div>
  )
}

export default App