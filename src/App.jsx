import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation /> { /*Navigation*/ }
      <Routes>   
        <Route path="/" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add More Routes as needed */}
      </Routes>
      <Footer /> {/* Footer Component */}
    </>
  );
}

export default App;
