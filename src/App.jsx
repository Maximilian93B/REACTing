import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Skills from './components/Skills';
import { LoadingScreen } from './components/LoadingScreen';

// RouterLoader is responsible for displaying the loading screen 
// useState --> to manage if loading or not 
// Use location hook to detect route changes 
// useEffect tp trigger loading state 
// When the location changes, setLoading to true
// Set Timeout to manage time to load 
// Handle route change --> loading screen will pop up,


const RouteLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setLoading(true);
    const loader = setTimeout(() => setLoading(false), 2000) // Time to load 
    
    return() => clearTimeout(loader)
  }, [location]);

  return loading ? <LoadingScreen /> : children;
};


function App() {
  return (
    <>
      <Navigation /> { /*Navigation*/ }
      <Routes>  
        <Route path="/home" element={<Hero />} />
        <Route path ="/about" element = {<About/>} /> 
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<Skills />} /> {/* Check this line */}
        <Route path="/contact" element={<Contact />} />
        {/* Add More Routes as needed */}
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
