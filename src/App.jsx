import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <Navigation /> { /*Navigation*/ }
      <Routes>   
        <Route path="/" element={<Hero/>} />
        <Route path ="/about" element = {<About/>} /> 
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} /> {/* Check this line */}
        {/* Add More Routes as needed */}
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
