import React from 'react'
import {RiSendPlaneLine} from 'react-icons/ri'

const NewsLetter = () => {
  return (
    <div className='m-7 rounded-3xl relative md:p-10 '>
      <div className='grid grid-cols-1 border rounded-3xl bg-titleCol relative overflow-hidden md:grid-cols-2 md:static '>
        <div className='absolute top-[-40px] left-[-50px] md:col-span-1 md:static md:m-10 md:pl-11'>
          <img className='w-36 md:w-72' src="../src/assets/img/newsletter-sushi.png" alt="" />
        </div>
        <div className='col-span-1 m-7 flex flex-col md:col-span-1 md:w-[250px] md:mt-10'>
          <div className='flex flex-col gap-1 items-center mb-5 md:items-start md:mb-10'>
            <h1 className='font-Dscript text-lg text-orange font-bold md:text-xl'>Newsletter</h1>
            <h2 className='text-fullCol text-xl font-Lora md:text-3xl'>
              Subscribe For <br/>
              Offer Updates
            </h2>
          </div>
          <div className=' grid grid-cols-2 gap-2 mx-auto border bg-fullCol rounded-full px-3 py-3'>
            <input className='col-span-1 bg-transparent border-none outline-none text-sm md:text-md' type="text" placeholder='Enter Email'/>
            <button className='col-span-1 text-sm font-Poppins bg-orange text-fullCol rounded-full text-center md:text-md'>
              Subcribe <RiSendPlaneLine className='inline-block -translate-y-[2px]'/>
            </button>
          </div>
        </div>
      </div>
      <img className='absolute bottom-[-25px] right-6 rotate-45 w-6 md:right-16 md:bottom-5 ' src="../src/assets/img/spinach-leaf.png" alt="" />
    </div>
  )
}

export default NewsLetter