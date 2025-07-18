import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="logo" className='w-32 mb-5' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Your Satisfaction is our Priority</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92-031458-58</li>
                    <li>Goshopping@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='text-center text-sm py-5'>Copyrights 2025@Goshopping.com - All Rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
