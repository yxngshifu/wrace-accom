import React from 'react';
import { CiChat1, CiLocationOn, CiPhone } from "react-icons/ci";

function Contact() {
  return (
    <div className='bg-white text-black'>
      <div className='py-20 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0'>
        
        <div className='text-black text-justify'>
          <form className='flex flex-col items-center mx-auto sm:py-4'>
            <div className='flex flex-col w-full max-w-xs sm:max-w-md lg:max-w-lg'>
              <input
                type="email"
                placeholder="EMAIL*"
                className='p-2 outline-none border-b border-black text-black focus:border-gray-400 w-full mb-4'
              />
              <input
                type="text"
                placeholder="SUBJECT*"
                className='p-2 outline-none border-b border-black text-black focus:border-gray-400 w-full mb-4'
              />
              <textarea
                placeholder='MESSAGE'
                cols='10'
                rows='10'
                className='resize-none border-b border-black focus:border-gray-400 outline-none p-4 w-full mb-4'
              ></textarea>
              <button className='bg-[#6c584c] text-white rounded-md font-medium w-full lg:w-[200px] my-6 px-6 py-3'>
                Send
              </button>
            </div>
          </form>
        </div>

        <div className='py-20 px-5 lg:px-20 text-justify'>
          <h1 className='font-bold text-[28px] text-[#7f5539]'>OUR OFFICE</h1>
          <p className="space-y-4 mt-4">
            <span className="flex items-center">
              <CiLocationOn className="mr-2" /> jabi airport road citec estates abuja
            </span>
            <span className="flex items-center">
              <CiChat1 className="mr-2" /> asteriaalliance@gmail.com
            </span>
            <span className="flex items-center">
              <CiPhone className="mr-2" /> +(234) 902 636 2304
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
