import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';

// Retro Button 
const RetroButton = styled.button`
  font-family: 'Press Start 2P', cursive;
  background-color: #e60073; 
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px; 
  text-transform: uppercase;
  outline: none;
  box-shadow: 0 0 10px #e60073, 0 0 20px #e60073; 
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #ff007a; // Slightly lighter shade on hover
  }

  &:active {
    transform: translateY(2px); // Pressed effect
  }
  @media (max-width: 768px) {
    font-size: 14px; // Slightly smaller font size for tablets
    padding: 8px 16px; 
  }

  // Media query for mobile devices (devices with width less than 480px)
  @media (max-width: 480px) {
    font-size: 12px; // Smaller font size for mobile devices
    padding: 6px 12px; 
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
  z-index: 999; // Set to make sure its on top of all content 
`;

// Handle styles for content inside Modal 
const ModalContent = styled.div`
width: 400px; 
height: auto; // Let the height adjust based on the content
background-color: #000; 
padding: 40px;
border-radius: 8px; 
border: 4px solid #fff; 


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
line-height: 2;

@media (max-width: 768px) {
  width: 80%; 
  padding: 20px; 
}

@media (max-width: 480px) {
  width: 95%; 
  padding: 10px; 
  font-size: 0.8rem; 
}


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
        return " This portfolio is a tribute to the era of tech that inspired me to become a developer. Enjoy!";
      
        case '/about':
        return "Hey! I'm Max a full stack developer always striving to create something exciting and engaging. I've got a real knack for turning ideas into digital realities. I love working in small, fast paced teams and excel in high stress situations ( almost a decade of military exprienece will do that). So, you can bet that everything here is built with passion, professionalism, and a touch of fun because you can never forget to smile. ";

        case '/skills':
        return "Unlock Skills: The Terminal is Your Key.";
      
        case '/contact':
        return "Thanks for stopping by, come back soon as this project is a work in progress.";

        case '/projects':
        return "Welcome to my lab , Toggle the buttons and take a look around! Feel free to go off and explore my projects.";
      
        default:
        return "Welcome to the portfolio of MDBdev";
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


































