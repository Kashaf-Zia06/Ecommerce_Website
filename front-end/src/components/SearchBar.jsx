import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'


const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)


    const location=useLocation()

    useEffect(()=>{
            if(location.pathname.includes('collection'))
                setVisible(true)
            else
                setVisible(false)
    },[location])
  
    return visible && showSearch ?   (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border-gray-400 px-4 py-2 my-5 mx-3 rounded-b-full w-3/4 sm:w-1/2 '>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className=' p-5 rounded-2xl flex-1 bg-inherit outline-none text-sm' type="text" placeholder='Search' />
            <img className='w-4'src={assets.search_icon} alt="search-icon" />
        </div>
        <img onClick={()=>{setShowSearch(false)}} className='inline w-3 cursor-pointer'src={assets.cross_icon} alt="cross-icon" />
      
    </div>
  ) : null
}

export default SearchBar
