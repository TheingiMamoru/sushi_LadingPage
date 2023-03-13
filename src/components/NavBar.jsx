import React from 'react'
import {BsArrowUp} from 'react-icons/bs'


const NavBar = () => {
  return (
    <div>
        <div className='sticky top-0 z-20'>
            <nav className="bg-bodyCol px-2 sm:px-4 py-2.5 rounded ">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="../src/assets/img/logo.png" className="h-6 mr-3 sm:h-8"/>
                        <span className="self-center text-xl max-w-[375px]:text-lg font-Lora font-semibold whitespace-nowrap">Sushi</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-para rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col items-center p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent bg-fullCol">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-para rounded bg-transparent md:p-0 hover:text-orange" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-para rounded bg-transparent md:p-0 hover:text-orange">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-para rounded bg-transparent md:p-0 hover:text-orange">
                                    Popular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-para rounded bg-transparent md:p-0 hover:text-orange">
                                    Recently
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <button className='fixed bottom-9 right-3 text-orange bg-fullCol p-2 z-20 '>
            <BsArrowUp/>
        </button>
    </div>
  )
}

export default NavBar