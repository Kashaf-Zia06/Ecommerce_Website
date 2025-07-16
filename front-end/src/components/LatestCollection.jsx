import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)

    const [latestProducts, setlatestProducts] = useState([])

    useEffect(() => {
        setlatestProducts(products.slice(1, 10))
    }
        , [products])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className='text-gray-600 text-xs sm:text-sm md:text-base w-3/4 m-auto'>
                    Discover the style of the season with our all-new latest collection where trend meets timeless!</p>
            </div>



            {/* rendering products */}

            <div className='grid grid-cols-2 sm:grid-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                    ))
                }

            </div>
        </div>
    )
}

export default LatestCollection
