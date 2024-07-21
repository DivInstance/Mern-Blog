import React, { useEffect } from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Blogs from './screen/Blogs';
import Blog from './screen/Blog';  

//ReactGA.initialize("G-1N5R9B764V");

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
