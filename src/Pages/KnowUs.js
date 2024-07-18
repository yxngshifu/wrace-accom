import React from 'react'
import wracehall from '../Assets/wracehall.jpg'
import Navbar from '../Components/Navbar';
import Management from '../Components/Management';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer'
function KnowUs() {
    const containerStyle = {
        backgroundImage: `url(${wracehall})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    };

  

  return (
    <div style={containerStyle}>
             <Navbar/>
       
            <div className="  px-10 md:px-20 lg:px-40 lg:mb-40">
              
                    <h1 className="text-4xl md:text-8xl text-center md:text-center font-ebold ">KNOW US</h1>
                </div>
        
         <Management/>
         <Contact/>
         <Footer/>
         </div>
    
  )
}

export default KnowUs