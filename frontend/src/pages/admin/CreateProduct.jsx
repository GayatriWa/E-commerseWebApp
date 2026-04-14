import {useForm}  from "react-hook-form";
import {nanoid} from 'nanoid'
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
 const {register, reset, handleSubmit} = useForm()
   const dispatch = useDispatch()
   const navigate = useNavigate()
  
    const CreateProductHandler = (product) =>{
      product.id= nanoid()
      dispatch(asynccreateproduct(product))
     navigate("/products")
    }
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)}
       className="flex flex-col w-1/2 justify-start items-start">

        <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('image')}
         type="url" 
         placeholder="image url" />

        <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('title')}
         type="text" 
         placeholder="title" />

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('price')}
         type="number" 
         placeholder="0.00" />

         <textarea className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('description')}
         placeholder="Enter description here" ></textarea>

         <input className='mb-2 outline-0 border-b p-2 text-2xl'
        {...register('category')}
         type="text" 
         placeholder="category name" />

         <button className='mt-5 px-4 py-2 bg-blue-500 rounded'>Create product</button>

      </form>
  )
}

export default CreateProduct