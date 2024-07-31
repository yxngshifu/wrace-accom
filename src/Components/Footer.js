import React from 'react';
import logo1 from '../Assets/greylogo.png';
import { Link } from 'react-scroll';
import { CiPhone, CiChat1, CiLocationOn, CiMail, CiDeliveryTruck } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";

function Footer() {
  const VectorStyle = {
    backgroundImage: `url(${logo1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-[#5e5d5c] text-white w-full relative'>
      <div className='w-full relative font-MuseoModerno text-center bg-[#495057]'>
        <div className='flex items-center justify-center flex-wrap align-middle'>
          <Link to='home' smooth={true} duration={500}>
            <img className="w-[350px] cursor-pointer" src={logo1} alt="/" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start text-center md:text-left py-4">
          <div className="text-white text-md font-semibold">
            <ul>
              <li className="hover:text-black cursor-pointer flex items-center space-x-2 justify-center md:justify-start">
                <CiPhone />
                <Link to="">
                  +2348172768869
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-md pb-2 font-semibold">
            <ul>
              <li className="hover:text-black cursor-pointer flex items-center space-x-2 justify-center md:justify-start">
                <CiChat1 />
                <Link to="/ourofferings">
                  infowrace@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-md pb-2 font-semibold">
            <ul>
              <li className="hover:text-black cursor-pointer flex items-center space-x-2 justify-center md:justify-start">
                <TbWorldWww />
                <Link to="">
                  www.wraceaccomodation.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-md pb-2 font-semibold">
            <ul>
              <li className="hover:text-black cursor-pointer flex items-center space-x-2 justify-center md:justify-start">
                <CiLocationOn />
                <Link to="">
                  jabi airport road citec estates abuja
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-12">
          <form>
            <div className="flex items-center space-x-2 text-white font-semibold my-4 mb-6">
              <CiMail className="text-white" />
              <input
                type="email"
                placeholder="subscribe for newsletter"
                className='p-2 outline-none border-b border-white bg-transparent text-white focus:border-gray-400 flex-1 w-80'
              />
              <button>
                <CiDeliveryTruck />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
