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
     <div className="  font-poppins flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-20 text-[#adb5bd] ">
             <Link to="/">
                <img className="w-[100px] mx-4 my-4 flex items-center" src={logo1} alt="/" />
               </Link>
            <ul className="hidden md:flex ">
                <li className="p-4 hover:text-[#000000]">
                      <Link to="/">ROOMS</Link>
                </li>
              
                <li className="p-4 hover:text-[#000000]">
                    <Link to="/knowus">KNOW US</Link>
                </li>
                <li className="p-4 hover:text-[#000000]">
                   <Link to="/gallery">GALLERY</Link>
                </li>
              
            </ul>
           <div className="flex items-center justify-end md:space-x-4 px-4">
    <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

    <div
        className={
            nav
                ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f5ebe0] bg-opacity-90 ease-in-out duration-500'
                : 'fixed left-[-100%]'
        }
    >
                 <Link to="/">
                <h1 className="w-full font-bold text-3xl m-4 text-[#0077b6]">
                    ASTERIA
                </h1>
                </Link>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600 hover:text-[#000000]">
                        <Link to="/work">ROOMS</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#000000]">
                         <Link to="/knowus">KNOW US</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#000000]">
                       <Link to="/gallery">GALLERY</Link>
                    </li>
                  
                    
                </ul>
            </div>
        </div>
        </div>
  )
}

export default Navbar