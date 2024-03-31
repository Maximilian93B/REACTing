import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const NextButton = styled.button`
font-family: 'Press Start 2P', cursive; /* Retro font */
background-color: #39FF14; /* Vibrant neon green color */
color: #fff;
border: none;
cursor: pointer;
padding: 10px 20px;
font-size: 16px; /* Adjust size as needed */
text-transform: uppercase;
outline: none;
box-shadow: 
  0 0 5px #39FF14, 
  0 0 10px #39FF14, 
  0 0 20px #39FF14, 
  0 0 40px #39FF14; /* Neon green glow effect */
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #3BFF15; /* A slightly lighter shade on hover */
  box-shadow: 
    0 0 10px #3BFF15, 
    0 0 20px #3BFF15, 
    0 0 40px #3BFF15, 
    0 0 80px #3BFF15; /* Intensified neon green glow effect on hover */
}

&:active {
  transform: translateY(2px); /* Pressed effect */
}


`;


function NextPageButton({ to }) {
   // 'to' prop for path to navigate  
    // Declare useNavigate 
    const navigate = useNavigate();


    return(
        <NextButton onClick={() => navigate(to)}>1-Up</NextButton>
    );
}


export default NextPageButton;



