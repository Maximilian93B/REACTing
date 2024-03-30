import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Skills from './components/Skills';
import  LoadingScreen  from './components/LoadingScreen';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }
  return(
      <>
      <Navigation /> { /*Navigation*/ }
      <Routes>  
        <Route path ='/' element={<LoadingScreen />} />
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
