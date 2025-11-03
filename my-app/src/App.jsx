import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';    
import Services from './pages/servicess';
import Web from './pages/web';
import PPC from './pages/ppc';
import SEO from './pages/seo';
import Social from './pages/social';
import Graphics from './pages/graphics';
import AboutUs from './pages/aboutus';
import Blog from './pages/blog';
import Contact from './pages/contactus';
import Quote from './pages/quote';
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
