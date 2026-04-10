import React from 'react'
import {useForm}  from "react-hook-form";
import {nanoid} from 'nanoid'
import {Link, useNavigate} from 'react-router-dom'
import { asyncregisteruser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {
   const {register, reset, handleSubmit} = useForm()
   const dispatch = useDispatch()
   const navigate = useNavigate()
  
    const RegisterHandler = (user) =>{
      user.id= nanoid()
      user.isAdmin = false
      dispatch(asyncregisteruser(user))
      navigate("/login")
    }
  return (
    <form onSubmit={handleSubmit(RegisterHandler)}
       className="flex flex-col w-1/2 justify-start items-start">

        <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('username')}
         type="text" 
         placeholder="john doe" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('email')}
         type="email" 
         placeholder="john@doe.com" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('password')}
         type="password" 
         placeholder="*******" />

         <button className='mt-5 px-4 py-2 bg-blue-500 rounded'>Register user</button>

         <p className='mt-5'>
           Allready have an account <Link className='text-blue-400' to='/login'>Login</Link> </p>

      </form>
  )
}

export default Register