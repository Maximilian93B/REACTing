import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// Retro Button 
// PS2P Font 
const RetroButton = styled.button`
  font-family: 'Press Start 2P', cursive; // Assuming you've imported this font
  background-color: #e60073; // Vibrant neon color
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px; // Adjust size as needed
  text-transform: uppercase;
  outline: none;
  box-shadow: 0 0 10px #e60073, 0 0 20px #e60073; // Neon glow effect
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff007a; // Slightly lighter shade on hover
  }

  &:active {
    transform: translateY(2px); // Pressed effect
  }
`;

// Modal for onClick
// MOdal will display content based on route
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); // Semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure it's on top of other content
`;

// Handle styles for content inside Modal 
const ModalContent = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
`;

// Define button component 
// State variable = OpenModal --> controls the visibility of the modal
// set'' is the function that allows the change of state for OpenModal 
// Modal is not visible initially 
// && condiational used to check if state is true 
// If true render modal 
// toggeModal onClick = close modal 
const TheButton = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!OpenModal);
  const location = useLocation(); 
  // Determine the location useLocation()
  // Define content served based on location
  // Set Switch (location.pathname)
  /*
  {
    case 'The location of the user'
    return 'The content served based on location'
  }
  */
  const getModalContent = () => {
    switch (location.pathname) {
      case '/about':
        return "I/m a web developer with a passion for creating immersive digital experiences.My journey into the world of development is driven by a love for technology and design,blending the two to craft websites and applications that not only perform well but also captivate and engage. Dive into my portfolio to explore the projects that I/ve brought to life.";
      case '/projects':
        return "Content for Projects Page";
      case '/skills':
        return "Content for Skills Page";
      case '/contact':
        return "Content for Contact Page";
      default:
        return "Welcome to the Future";
    }
  };
  // Returns JSX with Button logic + ModalContent with conditonal 
return(
    <>
        <RetroButton onClick={toggleModal}>Click Me</RetroButton>
      {OpenModal && (
        <ModalBackground onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent modal from closing when clicked inside */}
            <p>{getModalContent()}</p> {/* This is where i ran into the problem of not calling getModalContent as a function ! */}
            <RetroButton onClick={toggleModal}>Close</RetroButton>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}


export default TheButton; 


































