import React from 'react'
import { topPicks } from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function TopPicks() {
  return (
    <>
      <h2 className='hidden lg:block text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h2>
      <section className='hidden lg:flex container m-auto p-2 '>
        
        <Splide options={{perPage: 4, gap: '0.5rem', drag: 'free', arrows: false, pagination: false}}>
          {
            topPicks.map((item) => {
                return (
                  <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative'>
                      <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                        <p className='pl-2 pt-4 font-bold'>{item.title}</p>
                        <p className='pl-2'>{item.price}</p>
                        <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to Cart</button>
                      </div>
                      <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title} />
                    </div>
                  </SplideSlide>
                  
                )              
              }
            )
          }
        </Splide>
        
      </section>
    </>
  )
}
