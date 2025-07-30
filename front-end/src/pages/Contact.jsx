import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="contact-img" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, US</p>
          <p className='text-gray-500'>Tel: (542539-58) <br />Email: shopCentre123@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at our Store</p>
          <p className='text-gray-500'>Learn more about job Openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs here</button>
        </div>
      </div>

      <NewsLetterBox/>


      
    </div>
  )
}

export default Contact
