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
width: 400px; 
height: auto; // Let the height adjust based on the content
background-color: #000; 
padding: 40px;
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
line-height: 2;
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
        return " This portfolio is a tribute to an era of tech that started it all for me. To all the Devs past,present and future..anything is possible";
      
        case '/about':
        return "Hey there! I'm Max. Welcome to my world of full stack development, where every line of code is a step towards creating something awesome. I've got a real knack for turning ideas into digital realities, and guess what? I love doing this in my free time too. So, you can bet that everything here is built with passion, professionalism, and a touch of fun.";

      
        case '/skills':
        return "There are many ways for someone to display skills they posses..";
      
        case '/contact':
        return "Content for Contact Page";

        case '/projects':
        return "Welcome to the lab , Toggle the buttons and take a look around! Feel free to go off and explore my projects. Im sure there is something there that will catch your eye.";
      
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


































