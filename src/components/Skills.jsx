import React from 'react';
import styled from 'styled-components';
import SkillsMarquee from './SkillsMarquee';


const SkillsContainer = styled.section`
background-color: #121212; // Dark background for the section
padding: 50px 20px;
text-align: center;
border-radius: 8px; // Optional: adds a modern touch
min-height: 100vh; // Makes the container fill the viewport height
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
    <SkillsContainer>
        <Title>My Skills</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, culpa cum cumque minima consequuntur quae deserunt rem consectetur voluptates quo odit nulla dolorum laborum tenetur voluptatum reprehenderit. Reprehenderit necessitatibus quia impedit incidunt obcaecati ratione perferendis nulla dicta sit accusamus consequuntur, reiciendis quasi molestiae eos quisquam et deleniti dignissimos, magnam natus.
            </Paragraph>
        <SkillsMarquee />
    </SkillsContainer>
    );
};


export default Skills;