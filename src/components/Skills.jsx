import React from 'react';
import styled from 'styled-components';
import SkillsMarquee from './SkillsMarquee';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactSkills.svg';
import TheButton from './Button';


// Section to contain Skills 
const SkillsContainer = styled.section`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
`;


// Titel Styles
const Title = styled.h2`
margin-bottom: 2rem; 
font-size: 2.5rem;
color: #e60073;
font-family: 'Press Start 2P', cursive;
`;


// Might get rid of Pargraph now that Modal is in place
const Paragraph = styled.p` 
font-size: 1.1rem;
  color: #c5c6c7; // Light grey for readability
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 2rem; // Adds some space before the marquee
`;

// Contain 'TheButton' So we can control where it goes
const ButtonContainer = styled.div`
    display: flex;
    justify-content: ;
    align-items: center;
    padding: 20px; 
`;

//Skills Componnent
//Parallax scrolling 
// Include Containers
//Include Title
// Include Para
// Import SkillsMarquee 
// Import TheButton

const Skills = () => {
    return(
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            width: '100%',
            height: 'auto',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
    <SkillsContainer>
        <Title>My Skills</Title>
            <Paragraph>
            </Paragraph>
        <SkillsMarquee />
        <ButtonContainer>
        <TheButton>Click Me</TheButton>
        </ButtonContainer>
    </SkillsContainer>
    </Parallax>
    );
};


export default Skills;