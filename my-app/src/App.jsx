import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';    
import Services from './pages/Servicess';
import Web from './pages/Web';
import PPC from './pages/Ppc';
import SEO from './pages/Seo';
import Social from './pages/Social';
import Graphics from './pages/Graphics';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/ContactUs';
import Quote from './pages/Quote';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/services" element={<Services />} />
        <Route path="/web" element={<Web />} />
        <Route path="/ppc" element={<PPC />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/social" element={<Social />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
