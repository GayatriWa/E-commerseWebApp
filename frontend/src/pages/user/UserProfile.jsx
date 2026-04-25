import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {useForm}  from "react-hook-form";
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncupdateuser } from '../../store/actions/userActions';
import { asyncdeleteuser } from '../../store/actions/userActions';
import { asynclogoutuser } from '../../store/actions/userActions';


const UserProfile = () => {
     
const user = useSelector(state => state.userReducer.user)

const { register, reset, handleSubmit } = useForm({

          defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password,
          }
        });

   const dispatch = useDispatch()
   const navigate = useNavigate()
  
    const currentUser = useSelector(state => state.userReducer.user)

const UpdateUserHandler = (formData) => {
  const updatedUser = {
    ...currentUser,   // ✅ keeps id
    ...formData       // ✅ updates values
  }

  dispatch(asyncupdateuser(updatedUser))
}
const LogoutUserHandler = (()=>{
  dispatch(asynclogoutuser());
  navigate("/login")
 })

 const DeleteHandler = (async ()=>{
  await dispatch(asyncdeleteuser(user.id));
  navigate("/login")
 })

  return user ? (
    <div>
        <form onSubmit={handleSubmit(UpdateUserHandler)}
       className="w-ull flex flex-col justify-start items-start">


        <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('username')}
         type="text" 
         placeholder="Enter A Name" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('email')}
         type="email" 
         placeholder="Enter Email" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('password')}
         type="password" 
         placeholder="*******" />

         <button className='mt-5 px-4 py-2 bg-blue-500 rounded'>Update User</button>
         <button type='button' onClick={LogoutUserHandler} className='mt-5 px-4 py-2 bg-red-400 rounded'>Logout User</button>
         
         <button type='button' onClick={DeleteHandler} className='mt-5 px-4 py-2 bg-red-600 rounded'>Delete User</button>

      </form>
    </div>
  ): "loading ..."
}

export default UserProfile