import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/HeroBGv5.svg';
import TheButton from './Button';
import NextPageButton from './NextButton';



const Section = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 100vh; /* Use min-height to ensure content isn't clipped */
 width: 100vw;
 background-image: url(${BackgroundImage});
 background-size: cover;
 background-position: center;
 
`;


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
    
    @media (max-width: 768px) {
        height: auto; // Allow container to grow with content
        min-height: 100vh; // Ensure it's not smaller than the viewport
        top: 10%; // You might want to adjust this for better visibility on small screens
        width: 80vw; // Increase width for smaller screens if necessary
    }
    @media (max-width: 480px) {
        height: auto; // Allow container to grow with content
        min-height: 100vh; // Ensure it's not smaller than the viewport
        font-size: 12px; // Smaller font size for mobile devices
        padding: 6px 12px; // Reduce padding for small screens
      }
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

    @media (max-width: 768px) {
        font-size: 1.5rem; // Adjust font size for smaller screens
      }
    
      @media (max-width: 480px) {
        font-size: 1.2rem; // Further reduce font size for very small screens
      }
`;  

const ButtonContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
top: 5vh; // Original position might be too low for mobile devices
right: 55%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
        top: 10vh; // Adjust position for tablet
    }
    @media (max-width: 480px) {  
      top: 40vh; // Adjust position for mobile phones
      left: %
    }
`;

const NextButtonStyles = styled.div`
position: fixed;
bottom: 400px; 
right: 20px; 
padding: 10px;

@media (max-width: 768px) {
    bottom: 8vh; // Adjust for smaller screens
  }

  @media (max-width: 480px) {
    bottom: 65vh; // Further adjust for very small screens
  }
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
            <Section>
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
            </Section>
        </Parallax>
    );
}; 

export default Hero; 