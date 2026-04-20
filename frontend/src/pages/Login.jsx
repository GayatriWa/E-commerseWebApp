import React from 'react'
import {useForm}  from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const {register, reset, handleSubmit} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LoginHandler = (user) =>{
    console.log(user)
    dispatch(asyncloginuser(user))
  }

  return (
      <form onSubmit={handleSubmit(LoginHandler)}
       className="flex flex-col w-1/2 justify-start items-start">


         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('email')}
         type="email" 
         placeholder="john@doe.com" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('password')}
         type="password" 
         placeholder="*******" />

         <button className='mt-5 px-4 py-2 bg-blue-500 rounded'>Login user</button>

         <p className='mt-5'>
           Dont have an account <Link className='text-blue-400' to='/register'>Register</Link> </p>

      </form>
    
  )
}

export default Login