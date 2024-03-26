import React from 'react';
import styled from 'styled-components';
import SkillsMarquee from './SkillsMarquee';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactSkills.svg';


const SkillsContainer = styled.section`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
`;

const Title = styled.h2`
margin-bottom: 2rem; 
font-size: 2.5rem;
color: #e60073;
font-family: 'Orbitron', sans-serif;
`;

const Paragraph = styled.p` 
font-size: 1.1rem;
  color: #c5c6c7; // Light grey for readability
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 2rem; // Adds some space before the marquee
`;

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, culpa cum cumque minima consequuntur quae deserunt rem consectetur voluptates quo odit nulla dolorum laborum tenetur voluptatum reprehenderit. Reprehenderit necessitatibus quia impedit incidunt obcaecati ratione perferendis nulla dicta sit accusamus consequuntur, reiciendis quasi molestiae eos quisquam et deleniti dignissimos, magnam natus.
            </Paragraph>
        <SkillsMarquee />
    </SkillsContainer>
    </Parallax>
    );
};


export default Skills;