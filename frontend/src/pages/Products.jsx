import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Products = () => {
  const products=useSelector((state)=> state.productReducer.products)
  console.log(products)


  const renderproduct = products.map((product)=>{
    return <div className='w-[31%] mr-3 mb-3 border shadow' key={product.id}>
      {product.image ? (
              <img className="w-full h-[30vh] object-cover" src={product.image} alt="" />
            ) : (
              <p>No Image</p>
            )}
      <h1>{product.title}</h1>
      <small>{product.description?.slice(0,100)}</small>
      <div className='p-3 mt-3 flex justify-between items-center'>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
      <Link className="block m-auto w-1/2" to={`/product/${product.id}`}>More Info</Link>
    </div>
  })
  return products.length > 0 ? <div className='overflow-auto flex flex-wrap'>{renderproduct}</div> : "loading ..." ;
}

export default Products