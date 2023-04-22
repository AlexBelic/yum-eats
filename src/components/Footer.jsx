import React from 'react'
import { FaDribbbleSquare, FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#24262b]'>
        <div className='container m-auto px-4 py-2'>
            <div className='pt-15 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h2 className='w-full text-3xl font-bold text-orange-500'>YamEats</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptates sint qui fuga maxime nostrum ex placeat reprehenderit ab ipsum quia sit blanditiis laborum cumque atque consequatur. Assumenda, quaerat ipsa!</p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York, USA</li>
                            <li className='py-2 text-sm'>Toronto, Canada</li>
                            <li className='py-2 text-sm'>Delhi, India</li>
                            <li className='py-2 text-sm'>London, UK</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                        <li className='py-2 text-sm'>New York, USA</li>
                            <li className='py-2 text-sm'>Toronto, Canada</li>
                            <li className='py-2 text-sm'>Delhi, India</li>
                            <li className='py-2 text-sm'>London, UK</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                        <li className='py-2 text-sm'>New York, USA</li>
                            <li className='py-2 text-sm'>Toronto, Canada</li>
                            <li className='py-2 text-sm'>Delhi, India</li>
                            <li className='py-2 text-sm'>London, UK</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                        <li className='py-2 text-sm'>New York, USA</li>
                            <li className='py-2 text-sm'>Toronto, Canada</li>
                            <li className='py-2 text-sm'>Delhi, India</li>
                            <li className='py-2 text-sm'>London, UK</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>      
    </footer>
  )
}
