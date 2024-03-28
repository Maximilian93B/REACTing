import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactHeroBG.svg';
import TheButton from './Button';
import GameHeader from './RetroHeader';

// Hero Section Container Styles 
const HeroContainer = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: black;
    font-family: 'Press Start 2P', cursive;
`;

const HeroContent = styled.div`
    max-width: 600px;
    padding: 20px;
    margin-top: 100px;
`; 
// Flash for Hero Title effect
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

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    animation: ${flash} 1.5s linear infinite; // apply flash
`;

const ButtonContainer = styled.div`
    text-align: center; // Center the content horizontally
    position: absolute; // Positioning relative to the nearest positioned ancestor (HeroContainer)
    top: 30%; // Adjust based on your layout
    width: 100%; // Take the full width to center content correctly
    z-index: 2; // Ensure it's above the background image

`;

const Hero = () => {
    return (
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            width: '100%',
            height: 'auto',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
            <ButtonContainer>
          
            </ButtonContainer>
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Loading...</HeroTitle>
               
                <TheButton /> {/* Button with Modal Cotent per location */}
            </HeroContent>
        </HeroContainer>
        </Parallax>
    );
}; 

export default Hero; 