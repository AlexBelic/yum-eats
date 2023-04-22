import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'

export default function TopNav() {
  const [sideNav, setSideNav] = useState(false)

  return (
    <header className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum<span className='text-orange-700 font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-orange-700 text-white rounded-full p-2 font-bold'>Free</p>
          <p className='p-2 font-bold'>Delivery</p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='search meals' />        
      </div>
      <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill className='mr-2' /> Cart
      </button>

      {sideNav ? (<div onClick={() => setSideNav(!sideNav)} className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>) : ("") }

      <nav
        
        className={
          sideNav 
            ? 'fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white' 
            : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white'
          }
      >
        <AiOutlineClose 
          onClick={() => setSideNav(!sideNav)}
          className='absolute top-4 right-4 cursor-pointer' 
          size={25} 
        />
        <h1 className='text-2xl p-4'>Yum<span className='text-orange-700 font-bold'>Eats</span></h1>
        <nav>
          <ul className='flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex items-center cursor-pointer hover:bg-gray-300 rounded-full duration-300'>
              <BsPerson className='mx-4 text-white bg-black rounded-full' size={25} />
              My Account
            </li>
            <li className='text-xl py-4 flex items-center cursor-pointer hover:bg-gray-300 rounded-full duration-300'>
              <TbTruckReturn className='mx-4 text-white bg-black rounded-full' size={25} />
              Delivery
            </li>
            <li className='text-xl py-4 flex items-center cursor-pointer hover:bg-gray-300 rounded-full duration-300'>
              <MdOutlineFavorite className='mx-4 text-white bg-black rounded-full' size={25} />
              My Favorite
            </li>
            <li className='text-xl py-4 flex items-center cursor-pointer hover:bg-gray-300 rounded-full duration-300'>
              <FaGoogleWallet className='mx-4 text-white bg-black rounded-full' size={25} />
              My Wallet
            </li>
            <li className='text-xl py-4 flex items-center cursor-pointer hover:bg-gray-300 rounded-full duration-300'>
              <MdHelp className='mx-4 text-white bg-black rounded-full' size={25} />
              Help
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}




