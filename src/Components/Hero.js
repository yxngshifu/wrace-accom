import React, { useState } from 'react';
import heropic from '../Assets/herowrace2.jpg';
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
    image: '../Assets/herowrace.jpg',
    
  },
  {
    title: 'Book a perfect room',
    para: 'YOUR PLACE',
    label: 'Customize your room with utilities dear to you',
    image: '../Assets/herowrace2.jpg',
  },
  {
    title: '100% Verified Listings',
    para: 'LOVELY',
    label: 'What you see is what you get. Our promise.',
    image: '../Assets/herowrace3.jpg',
  },
];

function Hero() {
  const bgStyle = {
    backgroundImage: `url(${heropic})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
        display: 'flex',
       justifyContent:'left',
        alignitems:'left',
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
     const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
    const [inputValue, setInputValue] = useState('');

     const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdown1Change = (e) => {
    setSelectedOption1(e.target.value);
    setSelectedOption2(''); // Reset the second dropdown when the first changes
    setSelectedOption3(''); // Reset the third dropdown when the first changes
  };

  const handleDropdown2Change = (e) => {
    setSelectedOption2(e.target.value);
    setSelectedOption3(''); // Reset the third dropdown when the second changes
  };

  const handleDropdown3Change = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log({
      selectedOption1,
      selectedOption2,
      selectedOption3,
      inputValue,
    });
    
  };

  // Options for the second dropdown based on the first dropdown's selection
  const dropdown2Options = {
    option1: ['WRACE COURT', 'WRACE HALL'],
    option2: ['WRACE COURT', 'WRACE HALL'],
    option3: ['Option 10', 'Option 11', 'Option 12'],
  };

  // Options for the third dropdown based on the second dropdown's selection
  const dropdown3Options = {
    'WRACE COURT': ['SOLO ROOM #2,500,000.00', 'TWIN ROOM #2,250,000.00'],
    'WRACE HALL': ['ROOM OF 1 #2,150,000.00', 'ROOM OF 2(EXECUTIVE) #1,950,000', 'ROOM OF 2(STANDARD) #1,700,000', 'ROOM OF 4 #1,500,000'],
    'WRACE COURT': ['SOLO ROOM #2,750,000.00', 'TWIN ROOM #2,550,000.00', ],
    'WRACE HALL': ['ROOM OF 1 #2,400,000.00', 'ROOM OF 2(EXECUTIVE) #2,250,000', 'ROOM OF 2(STANDARD) #2,000,000', 'ROOM OF 4 #1,700,000'],
    
  };


  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 text-black'>
        <div className="sm:px-20 md:px-20  md:py-40 lg:px-20 text-justify">
          <Slider {...settings}>
            {Data.map((item, index) => (
              <div key={index} className='sm:px-20 md:px-20 py-10 md:py-20 text-justify'>
                <p className='text-xl md:text-4xl lg:text-2xl text-black pb-4'>{item.title}</p>
                <h1 className='pb-2 sm:text-4xl md:text-4xl lg:text-6xl text-[#6c584c] font-bold'>{item.para}</h1>
                <p className='mb-4 text-md md:text-lg lg:text-xl xl:text-2xl text-black font-Raleway font-medium'>{item.label}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className='w-full relative py-20 px-20' style={bgStyle}>
          
          <div className="flex justify-center items-center h-screen py-40 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
       
         <div className="grid grid-cols-2 gap-4 md:grid-cols-2">

        <div className="mb-4">
          <label htmlFor="dropdown1" className="block text-gray-700 text-sm font-medium mb-2">
            LOCATION
          </label>
          <select
            id="dropdown1"
            value={selectedOption1}
            onChange={handleDropdown1Change}
            className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6c584c]"
          >
            <option value="">Choose an option</option>
            <option value="option1">NILE</option>
            <option value="option2">BAZE</option>
           
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dropdown2" className="block text-gray-700 text-sm font-medium mb-2">
            ACCOMODATION TYPE
          </label>
          <select
            id="dropdown2"
            value={selectedOption2}
            onChange={handleDropdown2Change}
            className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6c584c]"
            disabled={!selectedOption1} // Disable if no selection in the first dropdown
          >
            <option value="">Choose an option</option>
            {selectedOption1 &&
              dropdown2Options[selectedOption1].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dropdown3" className="block text-gray-700 text-sm font-medium mb-2">
           ROOM
          </label>
          <select
            id="dropdown3"
            value={selectedOption3}
            onChange={handleDropdown3Change}
            className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6c584c]"
            disabled={!selectedOption2} // Disable if no selection in the second dropdown
          >
            <option value="">Choose an option</option>
            {selectedOption2 &&
              dropdown3Options[selectedOption2].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="input" className="block text-gray-700 text-sm font-medium mb-2">
            EMAIL
          </label>
          <input
           placeholder='Email Address'
            id="inputEmail"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6c584c]"
          />
        </div>
         <div className="mb-4">
          <label htmlFor="input" className="block text-gray-700 text-sm font-medium mb-2">
            PHONE
          </label>
          <input
           placeholder='Phone Number'
            id="inputPhone"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#6c584c]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold   hover:bg-[#6c584c] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          BOOK NOW
        </button>
        </div>
      </form>
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
