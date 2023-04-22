import React from 'react'

export default function NewsLetter() {
  return (
    <section className=' bg-[#24262b] py-4'>
        <div className='container m-auto px-4 text-white'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h2>Need advance on how to improve your flow?</h2>
                    <p>Sign Ip to join our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type='email' placeholder='email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-2 px-6 py-3 border-none'>Notify Me</button>
                    </div>
                    <p>
                        we are concerned about the security of your data, Read{' '}<span className='text-[#00df9a]'>Privacy Policy</span>
                    </p>
                </div>
                <hr className='my-8 bg-gray-700 border-1' />
            </div>      
        </div>
    </section>
    
  )
}
