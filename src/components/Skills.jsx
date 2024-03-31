import React, { useState } from 'react';
import styled from 'styled-components';
import CliInterface from './Terminal';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactSkills.svg';
import TheButton from './Button';
import NextPageButton from './NextButton';

const SkillsBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // Center children vertically.
  align-items: center; // Center children horizontally.
  height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

// Styles for header container
const SkillsHeader = styled.header`
  width: 100%;
  padding: 20px 0;
  margin: 50px 0px;
  text-align: center; 
  color: #39FF14; // Neon green for the text
  font-family: 'Press Start 2P', cursive;
 
  @media (max-width: 480px) {
    padding: 5px 0;
    margin: 20px 0;
  }
`;

// Styles for title
const HeaderTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-shadow: 0 0 5px #39FF14, 0 0 10px #39FF14; // Glowing text effect

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further reduce for small screens */
  
`;

const HeaderSubtitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #c5c6c7; // Light grey for readability
  text-shadow: 0 0 5px #39FF14, 0 0 10px #39FF14; // Consistent glowing effect

  @media (max-width: 480px) {
    font-size: 0.7rem; /* Further reduce for readability */
  }
`;

// Skill Section Styles 
const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Align content to the start of the container
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto; // Allows scrolling within the section if content exceeds viewport height
`;

// Contain 'TheButton' So we can control where it goes

const ButtonContainer = styled.button`
font-family: 'Press Start 2P', cursive; // A pixelated font similar to old video games
background-color: #39FF14; // Vibrant neon green color
color: #000; // Text color

border: 3px solid #39FF14; // Neon green border to enhance the neon effect
cursor: pointer;
padding: 10px 10px;

margin: 20px auto; // Add some margin to separate from other content
font-size: 1rem;
text-transform: uppercase;

outline: none;
box-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 80px #39FF14; // Glowing effect
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #13e700; // A slightly different shade of green on hover
  box-shadow: 0 0 15px #39FF14, 0 0 25px #39FF14, 0 0 45px #39FF14, 0 0 85px #39FF14; // Enhanced glowing effect on hover
}
&:active {
  transform: translateY(2px); // Pressed effect
}
`;
const NextButtonContainer = styled.div`
position: fixed;
bottom: 400px; 
right: 20px; 
padding: 40px;

 @media (max-width: 480px) {
  display: none; // Hide the container (and thus the button) on mobile devices
}
`;

//Skills Componnent
const Skills = () => {

    // Add state to track Terminal Open/Close
    const [isTerminalVisible, setIsTerminalVisible] = useState(false);

    // function to Toggle state to open/close terminal
    const toggleTerminal = () => { setIsTerminalVisible(!isTerminalVisible)};


    return(
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            width: '100%',
            height: 'auto',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
            <SkillsBackground>
                <SkillsContainer>
                    <SkillsHeader>
                        <HeaderTitle>My Skills</HeaderTitle>
                        <HeaderSubtitle>A glimpse into my toolbox</HeaderSubtitle>
                    </SkillsHeader>
                     
                    {/* Button to toggle CLI visibility */}
                    <ButtonContainer onClick={toggleTerminal}>
                    {isTerminalVisible ? 'Hide Terminal' : 'Show Terminal'}
                    </ButtonContainer>
                    {/* Conditionally render the CliInterface based on isTerminalVisible */}
                    {isTerminalVisible && 
                      <CliInterface />
                    }
                    <NextButtonContainer>
                    <NextPageButton to ='/contact'/>
                    </NextButtonContainer>
                    <TheButton></TheButton>
                </SkillsContainer>
            </SkillsBackground>
    </Parallax>
    );
};


export default Skills;