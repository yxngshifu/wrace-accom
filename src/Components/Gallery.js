import React from 'react'
import wracehall from '../Assets/wracehall.jpg'
import Footer from './Footer';
import Navbar from './Navbar';
function Gallery() {
     const containerStyle = {
        backgroundImage: `url(${wracehall})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    };
  return (
    <div style={containerStyle} className='h-screen '>
      <Navbar/>
         <div>
           
            <div className="sm:mb-60 lg:mb-60 ">
                    <h1 className="text-4xl md:text-8xl text-center md:text-center font-bold ">GALLERY</h1>
                </div>
                  <div className='sm:py-40 lg:py-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-black'>
               <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />  
  <div className=" inset-0 bg-black opacity-50"></div>
  <h2 className="absolute top-4 left-4 text-white  text-2xl">
    WRACE HALL
  </h2>
</div>

        
          <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className=" inset-0 bg-black opacity-50"></div>
 
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className=" inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
 <div className='relative w-[300px] mx-auto my-4'>
  <img className="w-full" src={wracehall} alt="/" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
 <h2 className="absolute bottom-4 right-4 text-white text-2xl">
    WRACE COURT
  </h2>
</div>
</div>
              
         </div>

    </div>
  )
}

export default Gallery