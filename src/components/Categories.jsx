import React from 'react'
import { categories } from '../data/data'

export default function Categories() {
  return (
    <section className='container m-auto px-4 py-4'>
        <h2 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 py-5 px-2'>
            {categories.map((item) => {
                return (
                        <div key={item.id} className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                        <img className='object-cover rounded-xl w-40 h-40 cursor-pointer shadow-xl' src={item.img} alt={item.name} />
                    </div>
                )
            } )}
        </div>
    </section>
  )
}
