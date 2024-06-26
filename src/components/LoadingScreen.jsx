import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import GameHeader from './RetroHeader';

const width = '50vmin';
const borderWidth = `calc(${width} / 25)`;

// Container styles
const LoadinContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column; // Stack items vertically
justify-content: center; // Center items vertically
align-items: center; // Center items horizontally
background: black;
gap: 20px; // Adjust the space between items as needed

`;

// Rotate keyframese for react ribbons 
const rotate = (i) => keyframes`
from {
  transform: rotateZ(calc(360deg / 3 * ${i})) rotateX(66deg) rotateZ(0deg);
}
to {
  transform: rotateZ(calc(360deg / 3 * ${i})) rotateX(66deg) rotateZ(360deg);
}

`;

// Styles for React Circles 
const ReactCircles = styled.div`
  width: ${width};
  height: ${width};
  position: relative;
  perspective: 50000px;
  color: #ffcc00;
 
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 18.4%;
    height: 18.4%;
    border-radius: 100%;
    background: linear-gradient(45deg, #ff007a, #ffcc00); // Retro gradient effect
    @media (max-width: 768px) {
      width: 15vmin; // Smaller screens get a larger relative size
      height: 15vmin;
    }
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${borderWidth} solid currentColor;
    border-top: ${borderWidth} solid transparent;
    border-radius: 100%;
    box-shadow: 0 0 8px #ff007a;

    &:nth-child(4) {
      animation: ${rotate(1)} 2s ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: ${rotate(2)} 2s ease-in-out infinite;
    }
    &:nth-child(3) {
      animation: ${rotate(3)} 2s ease-in-out infinite;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
  }
  @media (max-width: 768px) {
    width: 70vmin; // Smaller screens get a larger relative size
    height: 70vmin;
  }

`;


// Loading Component

const LoadingScreen = () => {
  // useNavigate hook 
  // useState to toggle GameHeader Text 
const [headerText, setHeaderText] = useState('Please insert Floppy...');
  const navigate = useNavigate();

  // use Effect to setTime out to redirect to /home 
  // use Effect to setHeader Text to = 'loading...' 
  // GLobal timeout in app.jsx , 5sec
  useEffect(()=> {

    const changeTextTimer = setTimeout(() => {
      setHeaderText("Loading...");
    }, 3000);

    const redirectTimer = setTimeout(() => {
      navigate('/home');
      // Time to redirect 
    }, 6000);

    return () => {
      // Clean up timers
      clearTimeout(changeTextTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]); // Re run effect is navigate changes 

  
  return (
    <LoadinContainer>
      <GameHeader text={headerText} />
    <ReactCircles>
      <span />
      <div />
      <div />
      <div />
    </ReactCircles>
    </LoadinContainer>
  )
};




export default LoadingScreen;