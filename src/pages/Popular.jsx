import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Popular = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-1 gap-12 md:gap-4 mt-20 md:grid-cols-3 md:justify-around'>
            <div className='md:col-span-3'>
                <h1 className='text-center text-xl font-Dscript text-orange'>The Best Food</h1>
                <h2 className='text-center text-2xl font-Lora text-titleCol font-bold'>Popular Dishes</h2>
            </div>
            <div className='flex flex-col gap-3 mx-auto items-center w-[250px] bg-fullCol rounded-xl shadow-lg lg:w-[300px] md:w-[230px] relative '>
                <img className='p-3'  src="../src/assets/img/popular-onigiri.png" alt="" />
                <h3 className='font-Lora text-lg text-para'>Onigiri</h3>
                <p className='font-Poppins text-sm text-para '>Japanese Dish</p>
                <span className='font-Poppins text-orange text-lg mb-5'>$10.99</span>
                <button className='bg-orange text-fullCol p-1.5 rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag className='-translate-y-[1px]'/>
                </button>
            </div>
            <div className='flex flex-col gap-3 mx-auto items-center w-[250px] bg-fullCol rounded-xl shadow-lg lg:w-[300px] md:w-[230px] relative'>
                <img className='p-3' src="../src/assets/img/popular-spring-rolls.png" alt="" />
                <h3 className='font-Lora text-lg text-para'>Sping Rolls</h3>
                <p className='font-Poppins text-sm text-para '>Japanese Dish</p>
                <span className='font-Poppins text-orange text-lg mb-5'>$15.99</span>
                <button className='bg-orange text-fullCol p-1.5 rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag className='-translate-y-[1px]'/>
                </button>
            </div>
            <div className='flex flex-col gap-3 mx-auto items-center w-[250px] bg-fullCol rounded-xl shadow-lg lg:w-[300px] md:w-[230px] relative'>
                <img className='p-3' src="../src/assets/img/popular-sushi-rolls.png" alt="" />
                <h3 className='font-Lora text-lg text-para'>Sushi Rolls</h3>
                <p className='font-Poppins text-sm text-para '>Japanese Dish</p>
                <span className='font-Poppins text-orange text-lg mb-5'>$19.99</span>
                <button className='bg-orange text-fullCol p-1.5 rounded-full absolute bottom-5 right-5'>
                    <HiOutlineShoppingBag className='-translate-y-[1px]'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Popular