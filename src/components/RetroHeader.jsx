import React from 'react'
import styled, { keyframes } from 'styled-components';



// Flasging effect for header 
const flash = keyframes`
0%, 100% { 
    opacity: 1;
    color: #e60073; // Original neon-like color
    text-shadow: 3px 3px 0 #000, 0 0 20px #e60073, 0 0 40px #e60073; // Original + enhanced glow
  }
  50% { 
    opacity: 0;
    color: #ff007a; // Lighter shade for a change in flash
    text-shadow: none; // Temporarily remove shadow for effect
  }
`;


// RetroHeader styles 
const RetroHeader = styled.h1`
font-family: 'Press Start 2P', cursive; 
  color: #e60073; 
  text-align: center;
  text-shadow: 3px 3px 0 #000; 
  padding: 20px;
  margin: 0 auto;
  background: #000; 
  display: inline-block;
  border: 3px solid #e60073; 
  box-shadow: 0 0 10px #e60073, 0 0 20px #e60073; 
  animation: ${flash} 1.5s linear infinite; // apply flash
`;



// RetroHeader accpets 'text' prop to display

const GameHeader = ({ text }) => {
    return<RetroHeader>{text}</RetroHeader>;
};

export default GameHeader;



