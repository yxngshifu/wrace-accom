import React from 'react'
import wracehall from '../Assets/wracehall.jpg'

function Explore() {
  return (
    <div>
         <div className=' px-20 text-start text-black'>
  <h1 className='relative inline-block uppercase font-bold text-[24px]'>
    Explore our locations
    <span className='absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]'></span>
  </h1>
  </div>
         <div className=' sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-2 text-black'>
               <div className='relative   mx-auto my-4'>
  <img className="w-[390px]" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <h2 className="absolute top-4 left-4 text-white  text-2xl">
    WRACE HALL
  </h2>
</div>

        
          <div className='relative w-[390px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>

          </div>
          </div>
    

  )
}

export default Explore