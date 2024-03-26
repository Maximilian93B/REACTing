import React from 'react';
import styled, { keyframes } from 'styled-components';



// Pixar art animation 
const rotate = keyframes`
0% {transform: rotate(0Deg);}
100% {transform: rotate(360Deg;)}
`;

const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: black; // Or any other background that fits the theme
`;

const PixelArtLoader = styled.div`
  width: 64px;
  height: 64px;
  background: url('/path/to/your/pixel-art.gif'); // Path to your 90s retro pixel art
  animation: ${rotate} 2s linear infinite;
`;

export const LoadingScreen = () => {
    <LoadingContainer>
        <PixelArtLoader></PixelArtLoader>
    </LoadingContainer>
};
