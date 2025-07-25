import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Product from '../pages/Product'
import ProductItem from './ProductItem'

const RelatedProduct = ({category,subCategory}) => {

  const {products}=useContext(ShopContext)
  const [related,setRelated]=useState([])
  console.log(category)
  console.log(subCategory)

  useEffect(()=>{
 
    if(products.length>0)
    {
      let productsCopy=products.slice()
      productsCopy=productsCopy.filter((item)=>(category===item.category))
      productsCopy=productsCopy.filter((item)=>(subCategory===item.subCategory))      
      setRelated(productsCopy.slice(0,5))
  

    }
  },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'Related'} text2={'Products'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

      {
        related.map((item,index)=>(<ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />))
      }
      </div>

    </div>
  )
}

export default RelatedProduct
