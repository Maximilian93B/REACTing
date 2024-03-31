import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/HeroBGv5.svg';
import TheButton from './Button';
import NextPageButton from './NextButton';

const HeroContainer = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;// Hero Section Container Styles 
    `;


const HeroContent = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
overflow: hidden;
font-family: 'Press Start 2P', cursive;;
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

const HeroTitleContainer = styled.div  `
    height: 10vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; 
    top:5%; // Position  at the top of the page
    left: 50%; // Center the container horizontally
    transform: translateX(-50%); // Adjust for horizontal centering

`;

const HeroTitle = styled.h1`
    max-width: 600px;
    padding: 20px;
    animation: ${flash} 1.5s linear infinite; // apply flash
    font-size: 2rem;
`;  

const ButtonContainer = styled.div`
text-align: center;
position: fixed;
top: 60vh; // Adjust this value based on the size of the HeroTitleContainer and desired spacing
left: 58%;
transform: translateX(-50%);
width: 100%; // Or set a specific width if you prefer
z-index: 2;

`;


const NextButtonStyles = styled.div`
position: fixed;
bottom: 400px; 
right: 20px; 
padding: 40px;
`;

const Hero = () => {
   
    return (
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            width: '100vw',
            height: 'auto',
            backgroundSize: 'cover',
            backgroundPosition: 'center ',
            backgroundRepeat: 'no-repeat',
          }}>
            <HeroContainer>
            <HeroContent>
                <HeroTitleContainer>
                    <HeroTitle>Ready Player One?</HeroTitle>
                </HeroTitleContainer>
            </HeroContent>
        <NextButtonStyles>
        <NextPageButton to ='/about' />
        </NextButtonStyles>
        <ButtonContainer>
            <TheButton /> {/* Button with Modal Cotent per location */}
            </ButtonContainer>
            </HeroContainer>
        </Parallax>
    );
}; 

export default Hero; 