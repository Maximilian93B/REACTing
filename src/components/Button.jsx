import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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


const animateBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 800px 0; }
`;

// Modal for onClick
// Modal will display content based on route
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${animateBackground} 20s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Set to make sure its on top of all content 
`;

// Handle styles for content inside Modal 
const ModalContent = styled.div`
width: 400px; // Set a specific width for the modal
height: auto; // Let the height adjust based on the content, or set a specific height
background-color: #000; // Typical for a 90s theme, adjust as needed
padding: 20px;
border-radius: 8px; // Or use 0 for a more retro, sharp-edged look
border: 4px solid #fff; // Optional: pixel-art style border

// Pixel art style box-shadow, gives a neon-like glow effect
box-shadow: 0 0 10px rgba(255, 255, 255, 0.75), 
0 0 20px rgba(0, 255, 255, 0.75), 
0 0 30px rgba(0, 255, 0, 0.75), 
0 0 40px rgba(255, 0, 255, 0.75);




display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Press Start 2P', cursive;
color: white; 
`;



// Define button component 
// State variable = OpenModal --> controls the visibility of the modal
// set'' is the function that allows the change of state for OpenModal 
// Modal is not visible initially 
// && condiational used to check if state is true 
// If true render modal 
// toggeModal onClick = close modal 

 // Determine the location useLocation()
  // Define content served based on location
  // Set Switch (location.pathname)
  /*
  {
    case 'The location of the user'
    return 'The content served based on location'
  }
  */

const TheButton = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!isOpenModal);
  const location = useLocation(); 
 


  const getModalContent = () => {
    console.log("Current Path:", location.pathname); //
    switch (location.pathname) {
      
      case '/home':
        console.log(location.pathname);
        return "Welcome to my Portfolio...";
      
        case '/about':
        return "Hey, Im Max a Full Stack Dev with a passion for creating immersive digital experiences.My journey into the world of development is driven by a love for technology and design,blending the two to craft websites and applications that not only perform well but also captivate and engage. Dive into my portfolio to explore the projects that I have brought to life.";
      
        case '/skills':
        return "There are many ways for someone to present skills they posses.. Take a look around";
      
        case '/contact':
        return "Content for Contact Page";

        case '/projects':
        return " Content for Projects....";
      
        default:
        return "Welcome to the Future";
    }
  };
  // Returns JSX with Button logic + ModalContent with conditonal 
return(
    <>
        <RetroButton onClick={toggleModal}>Click Me</RetroButton>
      {isOpenModal && (
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


































