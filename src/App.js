import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import KnowUs from './Pages/KnowUs';
import Gallery from './Components/Gallery';

function App() {
  return (
     <Router>
    <div className="App">
         <Routes>
           <Route path="/" element={<Hero />} />
            <Route path="/knowus" element={<KnowUs/>} />
            <Route path="/gallery" element={<Gallery />}/>
            
         </Routes>
    
    </div>
    </Router>
  );
}

export default App;
