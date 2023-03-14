import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Recently = () => {
  return (
    <div className='relative overflow-hidden'>
        <div className='grid grid-cols-1 gap-6 md:gap-1 p-5 md:grid-cols-11 mt-20'>
            <div className='p-5 md:col-span-6 order-2 md:order-2'>
                <img className='w-[500px] mx-auto' src="../src/assets/img/recently-salmon-sushi.png" alt="" />
            </div>
            <div className='flex flex-col gap-6 p-3 items-center justify-center md:col-span-5 order-1 md:order-1 md:items-start md:gap-4 '>
                <div className='text-center md:text-left relative'>
                    <h1 className='font-Dscript text-lg text-orange font-bold md:text-xl'>Recently Added</h1>
                    <h2 className='text-titleCol text-2xl font-Lora md:text-4xl'>
                        Sushi Samurai<br/>
                        Salmón Cheese
                    </h2>
                    <img className='absolute bottom-0 -right-10 opacity-90 w-6 rotate-[25deg] md:w-9 md:-bottom-5 md:-right-16 ' src="../src/assets/img/spinach-leaf.png" alt="" />
                </div>
                <p className='text-pale-para text-center font-Poppins md:text-left md:w-[300px] mb-3'>
                    Take a look at what's new. And do not deprive yourself of a good meal, enjoy and be happy.
                </p>
                <button className='flex items-center gap-2 font-Poppins text-fullCol px-4 py-2 md:px-3 md:gap-1 border rounded-full bg-orange'>
                    Order Now <BsArrowRight className='text-xl'/>
                </button>
            </div>
        </div>
        <img className='absolute w-20 bottom-[200px] -left-4 opacity-50 md:hidden' src="../src/assets/img/leaf-branch-2.png" alt="" />
        <img className='absolute w-10 bottom-[200px] -right-4 -rotate-[20deg] opacity-50 md:hidden' src="../src/assets/img/leaf-branch-3.png" alt="" />
    </div>
  )
}

export default Recently 