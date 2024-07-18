import React from 'react'
import wracehall from '../Assets/wracehall.jpg'

function Management() {
  return (
    <div className='bg-[#e0e1dd]'>
         <div className=' px-20 grid grid-cols-1 lg:grid-cols-3 gap-2 text-black container mx-auto px-4'>
               <div className='relative w-[390px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  
</div>

        
          <div className='relative w-[390px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>

</div>
<div className='py-10'>
     <h1 className='relative flex items-center uppercase  text-[16px]'>
  <span className='bg-gray-500 h-[1px] w-[60px] mr-6'></span>
  Our Leadership
</h1>
    <div className='font-bold text-[28px] text-[#7f5539]'>
  <h1>MANAGEMENT</h1>
  </div>
  <div className='mb-4'>
  <h2 className='text-justify font-bold'>BELLO UMAR AJIYA (MD)</h2>
  <p className='text-justify'>Bello is a graduate of Business Management from Middlesex University Dubai.
     He is also the co-founder & Managing Director of Kremy Cones.</p>
     </div>
<div>
     <h2 className='text-justify font-bold'>MURTALA MAMMAN ALI (CO FOUNDER)</h2>
  <p className='text-justify'>Investor in real estate, a graduate of Coventry University, UK also the co-founder of the Wrace Group.</p>
</div>
</div>
</div>
    </div>
  )
}

export default Management