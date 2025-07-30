import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about-img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ipsum at excepturi provident dolore? Cupiditate tenetur consectetur ratione fugiat magnam!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error, excepturi dignissimos porro aliquam nihil debitis deleniti molestiae nostrum molestias.</p>
          <b>Our Mission</b>
          <p>Our mission is to empower customers with innovation Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nam.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose US'}/>
      </div>


      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam commodi cupiditate minus adipisci est suscipit rerum magni, soluta nostrum!</p>
        </div>

        <div className='border  border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam commodi cupiditate minus adipisci est suscipit rerum magni, soluta nostrum!</p>
        </div>


        <div className='border  border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Service:</b>
          <p  className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam commodi cupiditate minus adipisci est suscipit rerum magni, soluta nostrum!</p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
