import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RiCheckboxBlankFill } from 'react-icons/ri'

export default function Featured() {
    const sliders = [        
        {
            url: '/images/01-burger.jpg'
        },
        {
            url: '/images/02-indian.jpg'
        },
        {
            url: '/images/03-mix.jpg'
        },
        {
            url: '/images/04-pizza.jpg'
        },
        {
            url: '/images/05-vegeterian.jpg'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <section className='container h-[500px] w-full px-4 py-4 relative m-auto group'>
      <div 
        className='w-full h-[500px] rounded-2xl bg-center bg-cover duration-500' 
        style={{ background: `url(${sliders[currentIndex].url} )` }} 
    >
      </div>      
        <div className='invisible group-hover:visible absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:p-3 duration-300 ml-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider} />
        </div>      
      
      <div className='invisible group-hover:visible absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:p-3 duration-300 mr-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 justify-center items-center py-2'>
        {
            sliders.map((sliderItems, slideIndex) => (
                <div key={slideIndex} onClick={() => moveToNextSlide(slideIndex)} className='text-2xl mx-1 hover:text-4xl cursor-pointer duration-300'>
                    <RiCheckboxBlankFill className='text-orange-700' />
                </div>
            ))
        }
      </div>
    </section>
  )
}
