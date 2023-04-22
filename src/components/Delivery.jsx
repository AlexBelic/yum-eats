import React from 'react'

export default function Delivery() {
  return (
    <section className='w-full bg-white py-16 px-4'>
      <h2 className='text-orange-500 font-bold text-2xl text-center'>Quick Delevery App</h2>
      <div className='container mx-auto grid md:grid-cols-2'>
        <img className='hidden md:block w-[550px] mx-auto my-4' src='/images/FC_two_phones.webp' />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nostrum porro veritatis atque enim, repellendus iure et? 
                Eaque, eos amet nemo asperiores neque quo corrupti. 
                Beatae reprehenderit ipsam fugit odio molestias.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>

    </section>
  )
}
