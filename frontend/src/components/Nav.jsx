import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'


const Nav = () => {
  const user = useSelector((state)=>state.userReducer.user)
  console.log(user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHandler = () =>{
    dispatch(asynclogoutuser())
    navigate("/")
  }

  return (
    <nav className='flex justify-center items-center gap-x-5 p-10 mb-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>

        {user ? <>
        
            <NavLink to='/admin/create-product'>Create Product</NavLink>
            <button onClick={LogoutHandler}>Logout</button>
          </>:<><NavLink to='/login'>Login</NavLink></>}
        
    </nav>

  )
}

export default Nav