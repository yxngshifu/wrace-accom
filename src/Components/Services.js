import React from 'react';
import { CiWifiOn } from 'react-icons/ci';
import { PiDesktopLight } from 'react-icons/pi';
import { TbBusStop } from 'react-icons/tb';
import { IoBedOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi2';
import { BiCctv } from 'react-icons/bi';
import { MdOutlineLocalLaundryService } from 'react-icons/md';
import { TbLocationCheck } from 'react-icons/tb';

function Services() {
  return (
    <div className="min-h-screen py-10 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-10">
        <div className="relative flex flex-col items-start p-4  ">
          <CiWifiOn size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg font-semibold">24 HR WIFI SERVICE</h1>
            <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
         <p className="mt-2 text-gray-700  block">
  Stay connected with free WiFi, work or catch up on your studies in our library lounge.
</p>

        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <PiDesktopLight size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">FAST AND EASY BOOKING</h1>
           <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            Time is money. Save both when you book with us.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <BiCctv size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">CCTV SECURITY</h1>
          <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            We provide surveillance cameras for every floor of our building, 24/7.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <MdOutlineLocalLaundryService size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">LAUNDRY SERVICE</h1>
          <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            Don't worry about packing light, we'll take care of your laundry needs.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <TbBusStop size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">TRANSPORT SERVICE</h1>
          <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            Enjoy our shuttle service for convenient transportation within the area.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <IoBedOutline size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">FULLY FURNISHED</h1>
           <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            Our rooms are fully furnished to provide comfort and convenience.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4 ">
          <HiOutlineLightBulb size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">24HR ELECTRICITY</h1>
           <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            We ensure a steady power supply for a conducive environment.
          </p>
        </div>

        <div className="relative flex flex-col items-start p-4">
          <TbLocationCheck size={40} className="text-gray-700 mb-2" />
          <h1 className="text-gray-700 sm:text-md lg:text-lg  font-semibold">IDEAL LOCATION</h1>
          <div className="relative">
    <span className="absolute left-0 bg-black -bottom-2 h-[2px] w-[60px]"></span>
    </div>
          <p className="mt-2 text-gray-700">
            Located near major universities in Abuja for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
