import React from 'react'

const AboutUs = () => {
  return (
    <div className='grid grid-cols-1 gap-6 p-5 mt-20 md:grid-cols-2 md:gap-1'>
        <div className='flex flex-col gap-3 p-3 items-center justify-center md:col-span-1 order-1 md:order-2 md:items-start md:gap-4 md:pl-[30px]'>
            <h1 className='font-Dscript text-orange text-xl '>About Us</h1>
            <h1 className='text-titleCol text-3xl font-Lora md:text-4xl  '>
                <div className='flex gap-1 items-center md:mt-3'>
                    <h1 className='md:tracking-wide'>We Provide</h1>
                    <span className='mr-2 '><img className='w-7 md:w-10' src="../src/assets/img/about-sushi-title.png" alt="" /></span>
                </div>
                Healthy Food
            </h1>
            <p className='text-pale-para text-center font-Poppins md:text-left md:w-[300px]'>
                Food comes to us from our relatives, whether they have wings or roots. This is how we consider food, it also has a culture. It has a history that passes from generation to generation.
            </p>
        </div>
        <div className=' md:col-span-1 md:p-[50px] order-2 md:order-1'>
            <img className='w-[400px] mx-auto' src="../src/assets/img/about-sushi.png" alt="" />
        </div>
    </div>
  )
}

export default AboutUs