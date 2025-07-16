import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to='/'><img src={assets.logo} alt="logo" className='w-36' /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                {/* -Home-- */}
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
                </NavLink>

                {/*--Collection-- */}
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>


                {/*--About-- */}
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                {/* --Contact-- */}
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt="search-icon" className='w-5 cursor-pointer' />
                <div className='group relative '>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile-icon" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-2xl'>

                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'> Log out</p>
                        </div>

                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full aspect-square text-[8px]'>5</p>
                </Link>

                <img onClick={() => setVisible(true)}
                    src={assets.menu_icon} alt="menu-icon"
                    className='w-5 cursor-pointer sm:hidden' />

            </div>

            {/* Sidebar for small screen */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all
                ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>

                    <div onClick={() => setVisible(false)}
                        className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon}
                            alt="drop-down"
                            className='h-4 rotate-180'
                        />
                        <p> Back</p>
                    </div>

                    <div className='flex flex-col'>
                        <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>Collection</NavLink>
                        <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>About</NavLink>
                        <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>Contact</NavLink>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Navbar
