import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {useForm}  from "react-hook-form";
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncupdateproduct } from '../../store/actions/productActions';
import { asyncdeleteproduct } from '../../store/actions/productActions';


const ProductDetail = () => {
  const {id} = useParams();
  // const {productReducer : {products}, userReducer:{users},} = useSelector((state)=>state)
  const products = useSelector(state => state.productReducer.products)
const user = useSelector(state => state.userReducer.user)
  const product = products?.find(product => String(product.id) === String(id))
  // console.log(products, user)

const { register, reset, handleSubmit } = useForm({

          defaultValues: {
            image: "",
            title: "",
            price: "",
            category: "",
            description: "",
          }
        });

      useEffect( () => {
        if (product) {
          reset({
            image: product.image,
            title: product.title,
            price: product.price,
            category: product.category,
            description: product.description,
          });
        }
      }, [product, reset]);

   const dispatch = useDispatch()
   const navigate = useNavigate()
  
    const UpdateProductHandler = (product) =>{
      dispatch(asyncupdateproduct(id, product))
    }

 const DeleteHandler = (()=>{
  dispatch(asyncdeleteproduct(id));
  navigate("/products")
 })
  return product ? (
    <>
     <div className='w-full flex'>
        <img className='w-1/3 h-auto object-cover' src={product.image} alt="" />


      <div className='px-3 w-1/2 h-1/2'>
        <h1 className='text-5xl font-thin mb-3'>{product.title}</h1>
        <p className='mb-5'>{product.description}</p>
        <h2 className='text-2xl text-green-400'>${product.price}</h2>
      </div>

    </div>
    <hr></hr>
    {user && user?.isAdmin && (
    <form onSubmit={handleSubmit(UpdateProductHandler)}
       className="w-ull flex flex-col justify-start items-start">

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

         <button className='mt-5 px-4 py-2 bg-blue-500 rounded'>Update product</button>
         
         <button type='button' onClick={DeleteHandler} className='mt-5 px-4 py-2 bg-red-400 rounded'>Delete product</button>

      </form>
    )}
    
      </>
  ) : "loading ..."
}


export default ProductDetail