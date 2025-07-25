import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  const { currency ,addToCart} = useContext(ShopContext)
  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')


  const getProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }

    })

  }

  useEffect(() => {
    getProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Products Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Products Image */}
        <div className='sm:flex-row flex flex-1 flex-col-reverse gap-3'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => { setImage(item) }} src={item} key={index} alt={`product-img-${index}`} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />

              ))
            }

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="main-pic" className='w-full h-auto' />

          </div>

        </div>

        {/* Products Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-1'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>
          <p className='mt-4 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => { setSize(item) }}
                    className={`bg-gray-50 border py-2 px-4 cursor-pointer ${item === size ? 'border-amber-600' : ''}`}
                    key={index}>{item}</button>
                ))
              }
            </div>
          </div>

          <button onClick={()=>{addToCart(productData._id,size)}} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-500 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original</p>
            <p>Easy Exhange and Return Policy within 7 Days</p>
            <p>Cash on Delivery is Possible</p>
          </div>


        </div>
      </div>

      {/*    Product reviews and description */}
      <div className='mt-20'>
        <div className='flex '>
          <b className='border px-5 py-3 text-sm'> Description</b>
          <p className='border px-5 py-3 text-sm'> Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe assumenda repellat explicabo, porro quisquam molestias, sit cumque at voluptatum necessitatibus, aliquam quas praesentium provident! Sapiente dicta aperiam rerum et maxime quo, illum deserunt odit molestias distinctio voluptate eligendi voluptatem ad laborum. Quibusdam quos ducimus ipsam at doloribus repudiandae animi sapiente?


          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda dolorem unde odit perferendis deleniti totam aliquam quas explicabo commodi?</p>
        </div>
    
      </div>
  {/*Related products */}
      
      <div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

      </div>

    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product
