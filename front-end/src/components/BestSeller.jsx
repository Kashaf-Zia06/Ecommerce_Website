import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setbestSeller] = useState([])

    useEffect(() => {

        setbestSeller(products.filter((item) => (item.bestseller)).slice(0, 5));

    }, [products])
    return (
        <div className='my-10'>

            <div className='text-center py-8 text-3xl '>
                <Title text1={'Best'} text2={'Sellers'} />
                <p className='text-gray-600 text-xs sm:text-sm md:text-base w-3/4 m-auto'>
                    Best Sellers of the SEASON!</p>
            </div>


            {/*  Rendering sellers */}


            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller
