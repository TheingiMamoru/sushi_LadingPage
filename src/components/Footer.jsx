import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div  className='relative mt-20 pb-4 overflow-hidden'>
      <div className='grid grid-cols-2 m-7 gap-3 md:grid-cols-6'>
        <div className='col-span-2 mb-5'>
          <div className='flex gap-1 mb-4'>
              <img className='w-6' src="../src/assets/img/favicon.png" alt="" />
              <h1 className='font-Lora text-xl font-bold text-titleCol'>Sushi</h1>
          </div>
          <p className='font-Poppins text-pale-para'>
              Food for the body is not <br/>enough. There must be food <br/>for the soul.
          </p>
        </div>
        <div className='col-span-1'>
          <h1 className='font-Poppins text-lg font-bold text-para mb-3'>Main Menu</h1>
          <ul className='font-Poppins text-pale-para'>
            <li className=''>About</li>
            <li className=''>Menus</li>
            <li className=''>Order</li>
            <li className=''>Events</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h1 className='font-Poppins text-lg font-bold text-para mb-3'>Information</h1>
          <ul className='font-Poppins text-pale-para'>
            <li className=''>Contact</li>
            <li className=''>Order & Returns</li>
            <li className=''>Videos</li>
            <li className=''>Reservation</li>
          </ul>
        </div>
        <div className='col-span-1 mt-5 md:mt-0'>
          <h1 className='font-Poppins text-lg font-bold text-para mb-3'>Address</h1>
          <p className='font-Poppins text-pale-para'>
            Av. Hacienda 1234 <br/>
            Lima 4321, Perú
            9AM - 11PM
          </p>
        </div>
        <div className='col-span-1 mt-5 md:mt-0'>
          <h1 className='font-Poppins font-bold text-lg text-para mb-3'>Social Media</h1>
          <div className='flex gap-5 items-center'>
            <a href="https://www.facebook.com/">
              <FaFacebook className='text-orange text-lg'/>
            </a>
            <a href="https://www.instagram.com/">
              <AiFillInstagram className='text-orange text-xl'/>
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className='text-orange text-lg'/>
            </a>
          </div>
        </div>
        <div className='col-span-2 flex flex-col items-center gap-2 mt-10 md:col-span-6 md:flex-row justify-between'>
          <div className='flex gap-4 md:order-2 '>
            <img className='w-6' src="../src/assets/img/footer-card-1.png" alt="" />
            <img className='w-6' src="../src/assets/img/footer-card-2.png" alt="" />
            <img className='w-6' src="../src/assets/img/footer-card-3.png" alt="" />
            <img className='w-6' src="../src/assets/img/footer-card-4.png" alt="" />
          </div>
          <p className='text-pale-para text-sm md:order-1'>
            &#169; Copyright Bedimcode. All rights reserved
          </p>
        </div>
      </div>
      <img className='absolute bottom-[100px] left-[60px] w-6 rotate-[40deg] md:w-5 md:bottom-[90px]' src="../src/assets/img/spinach-leaf.png" alt="" />
      <img className='absolute bottom-[500px] right-[80px] w-6 rotate-[-40deg] md:bottom-[130px] md:right-[100px] md:w-5' src="../src/assets/img/spring-onion.png" alt="" />
      <img className='absolute bottom-[100px] -right-4 opacity-40 w-14 rotate-[-10deg] md:-bottom-5 md:right-[45%] md:w-24' src="../src/assets/img/leaf-branch-4.png" alt="" />
    </div>
  )
}

export default Footer