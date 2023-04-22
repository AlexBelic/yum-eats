import React, {useState} from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import { mealData } from '../data/data'

export default function Meal() {
    const [foods, setFoods] = useState(mealData);
    const fillterCat = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }
  return (
    <section className='container w-full m-auto px-4 py-12'>
        <h2 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h2>
        <div className='flex flex-col lg:flex-row justify-center mb-4'>
            <div className='flex justify-center md:justify-center gap-2'>
                <button onClick={() => setFoods(mealData)} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>All</button>
                <button onClick={() => fillterCat('pizza')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Pizza</button>
                <button onClick={() => fillterCat('burger')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Burger</button>
                <button onClick={() => fillterCat('chicken')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Chicken</button>
                <button onClick={() => fillterCat('pork')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Pork</button>
                <button onClick={() => fillterCat('salad')} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'>Salad</button>
            </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            { foods.map((item) =>(
                <div key={item.id} className='border-none hover:scale-105 duration-300'>
                    < img className='w-full h-[200px] object-cover rounded-lg' src={item.img} alt={item.name} />
                    <div className='flex justify-between py-2 px-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-orange-700 h-[36px] w-[36px] rounded-full flex items-center justify-center text-white font-bold -mt-14 border-2'>{item.price}</p>
                    </div>
                    <div className='pl-4 py-4 -mt-7 cursor-pointer'>
                        <p className='flex items-center text-indigo-600'>View More <HiArrowSmRight className='ml-2 mt-1' /></p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
