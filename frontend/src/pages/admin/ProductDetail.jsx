import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams();
  const products = useSelector((state)=>state.productReducer.products)
  const product = products?.find(product => product.id === id)
  console.log(product)

  if (!product) return <p>Loading...</p>
  return (
     <div className='w-full flex'>
        <img className='w-1/2 h-1/2 object-cover' src={product.image} alt="" />


      <div className='px-3 w-1/2 h-1/2'>
        <h1 className='text-5xl font-thin mb-3'>{product.title}</h1>
        <p className='mb-5'>{product.description}</p>
        <h2 className='text-2xl text-green-400'>${product.price}</h2>
      </div>

    </div>
  )
}

export default ProductDetail