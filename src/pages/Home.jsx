import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:gap-1 p-5 md:grid-cols-11 md:mt-[80px]'>
        <div className='p-5 md:col-span-6 order-1 md:order-2'>
            <img className='w-[500px] mx-auto' src="../src/assets/img/home-sushi-rolls.png" alt="" />
        </div>
        <div className='flex flex-col gap-3 p-3 items-center justify-center md:col-span-5 order-2 md:order-1 md:items-start md:gap-4'>
            <div className=''>
                <h1 className='text-titleCol text-3xl font-Lora md:text-5xl'>
                    Enjoy Delicious
                </h1>
                <div className='flex gap-1 items-center md:mt-3'>
                    <span className='mr-2 '><img className='w-7 md:w-10' src="../src/assets/img/home-sushi-title.png" alt="" /></span>
                    <h2 className='md:tracking-wide text-titleCol text-3xl font-Lora md:text-5xl'>Sushi Food</h2>
                </div>
            </div>
            
            <p className='text-pale-para text-center font-Poppins mb-5 md:text-left md:w-[300px]'>
                Enjoy a good dinner with the best dishes in the restaurant and improve your day.
            </p>
            <button className='flex items-center gap-2 font-Poppins text-fullCol px-4 py-2 md:px-3 md:gap-1 border rounded-full bg-orange'>
                Order Now <BsArrowRight className='text-xl'/>
            </button>
        </div>
    </div>
  )
}

export default Home