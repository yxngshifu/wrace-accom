import React from 'react'
import logo1 from '../Assets/wracelogo.png';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';





function Navbar() {
    const [nav, setNav] = useState(false);

   

    const handleNav = () => {
        setNav(!nav);
    };
  
  return (
    <div>
         <div className="flex justify-between items-center mx-auto  lg:px-16 text-black">
        <Link to='/' smooth={true} duration={500}>
         <img className="w-[200px] lg:mx-10 sm:px-4 md:mx-6 my-8 flex items-center cursor-pointer" src={logo1} alt="/" />
         </Link>
        <ul className="space-x-12 text-black font-bold p-28 flex items-center ml-[-10px]">
     
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/rooms"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          ROOMS
        </Link>
      </li>
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/knowus"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          KNOW US
        </Link>
      </li>
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/gallery"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          GALLERY
        </Link>
      </li>
    </ul>
      <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
        </div>
         <div
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f09029] bg-opacity-100 ease-in-out duration-500'
                        : 'fixed left-[-100%] '
                }
            >
               <Link to='/' smooth={true} duration={500}>
         <img className="w-32 h-30 lg:mx-10 sm:px-4 md:mx-6 my-4 flex items-center cursor-pointer" src={logo1} alt="/" />
         </Link>
        <ul className="space-x-2 text-black font-bold p-4 flex items-center ml-[-10px]">
     
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/rooms"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          ROOMS
        </Link>
      </li>
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/knowus"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          KNOW US
        </Link>
      </li>
      <li className="hidden md:block cursor-pointer">
        <Link
          to="/gallery"
          smooth={true}
          duration={500}
          className="hover:text-[#6c584c] hover:underline focus:underline"
        >
          GALLERY
        </Link>
      </li>
    </ul>
            </div>
    </div>
  )
}

export default Navbar