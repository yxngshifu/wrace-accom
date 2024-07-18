import React from 'react';
import heropic from '../Assets/herowrace.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Services from './Services';
import Explore from './Explore';
import Footer from './Footer';

const Data = [
  {
    title: 'What is your perfect room like?',
    para: 'COZY ROOM',
    label: 'Book your perfect place from our vast selection of listings',
  },
  {
    title: 'Book a perfect room',
    para: 'YOUR PLACE',
    label: 'Customize your room with utilities dear to you',
  },
  {
    title: '100% Verified Listings',
    para: 'LOVELY',
    label: 'What you see is what you get. Our promise.',
  },
];

function Hero() {
  const bgStyle = {
    backgroundImage: `url(${heropic})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '70% 60%',
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 text-black'>
        <div className="sm:px-6 md:px-10  md:py-40 lg:px-20 text-justify">
          <Slider {...settings}>
            {Data.map((item, index) => (
              <div key={index} className='px-4 md:px-20 py-10 md:py-20 text-justify'>
                <p className='text-xl md:text-4xl lg:text-2xl text-black pb-4'>{item.title}</p>
                <h1 className='pb-2 md:text-4xl lg:text-6xl text-[#6c584c] font-bold'>{item.para}</h1>
                <p className='mb-4 text-md md:text-lg lg:text-xl xl:text-2xl text-black font-Raleway font-medium'>{item.label}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className='w-full relative font-MuseoModerno py-20' style={bgStyle}>
          <div className='bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 text-black'></div>
          </div>
        </div>
      </div>
      <Services />
      <Explore />
      <Footer />
    </div>
  );
}

export default Hero;
