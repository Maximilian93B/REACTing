// Project Section 

import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectImage1 from '../assets/DnDevs.png';
import ProjectImage2 from '../assets/svg/NerdHerd.svg';
import ProjectImage3 from '../assets/svg/SocailMind.svg'
import ProjectImage4 from '../assets/svg/ReactAvatar.svg'
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactProjects.svg';
import TheButton from './Button';
import NextPageButton from './NextButton';

// Styles for Container to hold cards 
const ProjectsBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; // Center children horizontally.
  min-height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows cards to wrap
  justify-content: center;
  gap: 20px; // Spacing between cards
  width: 100%; // Ensure it takes up full container width
    @media (max-width: 768px) {
        margin-bottom: 15px; /* Smaller screens */
        justify-content: center;
        text-align: center;
        /* You might want to adjust the gap for smaller screens */
        gap: 10px;
      }
      
      @media (max-width: 480px) {
        gap: 10px;
        padding: 0 10px; // Add padding on the sides for smaller screens
  
  
      `;


const ButtonContainer = styled.div`
display: flex;
flex-wrap: wrap; 
justify-content: center;
gap: 10px;
padding: 20px; 

@media (max-width: 480px) {
  gap: 5px; // Reduce gap for smaller screens
  padding: 10px; // Reduce padding to save space
}

`;

const ToggleButton = styled.button`
font-family: 'Press Start 2P', cursive; // Assuming you've imported this font
background-color: #e60073; // Vibrant neon color
color: #fff;
border: none;
cursor: pointer;
padding: 10px 20px;
margin-bottom: 5px; // Give space between projectCard and button 
font-size: 16px;
text-transform: uppercase;
outline: none;
box-shadow: 0 0 10px #e60073, 0 0 20px #e60073; // Neon glow effect
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #ff007a; 
}

&:active {
  transform: translateY(2px); // Pressed effect
}

@media (max-width: 480px) {
  font-size: 14px; // Smaller font size for smaller screens
  padding: 8px 16px; // Slightly reduce padding
`;


// Project Data 
const projects = [
    {
        title: "DnDevs",
        description: "Welcome to DungeonsAndDevs 🏰👨‍💻, where coding and fantasy merge in an epic learning adventure.",
        imageUrl: ProjectImage1,
        projectUrl: "https://github.com/Maximilian93B/DungeonsAndDevs",
        isVisible: false, // Adding for useState to toggle project View
    },
    
    {
        title: "NerdHerdHR",
        description: "NerdHerdHR is a all in one Back end Human Resources tool.",
        imageUrl: ProjectImage2,
        projectUrl: "https://github.com/Maximilian93B/NerdHerdHR",
       
    },
    
    {
        title: "Socail Mind API",
        description: "SocialMindAPI is a back-end platform designed to power social networking features with ease and efficiency.",
        imageUrl: ProjectImage3,
        projectUrl: "https://github.com/Maximilian93B/SocialMindAPI",
       
    },
    
    {
        title: "Reacting",
        description: "Reacting is a front-end React project inspired by my childhood.",
        imageUrl: ProjectImage4,
        projectUrl: "https://github.com/Maximilian93B/REACTing",
       
    },
     
];


const NextButtonContainer = styled.div`
position: fixed;
bottom: 400px; 
right: 20px; 
padding: 40px;

@media (max-width: 480px) {
  bottom: 10px; // Even closer to the bottom edge
  right: 10px; // Closer to the right edge
  padding: 10px; // Reduce padding to save space
}
`;

// Project Component

//Map though projects Array and render cards for each project
const ProjectsSection = () => {
    console.log('Rendering ProjectsSection');

  const [projectsVisibility, setProjectsVisibility] = useState(
    projects.reduce((acc, projects, index)=>{
        acc[projects.title] = false; // Iinit with project title as key  
        return acc; 
    }, {})
  );
    // Manage the state to toggle projects visibility on title
  const toggleProjectVisibility = (title) => {
    setProjectsVisibility(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };
  

  return (
    <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{
      height: 'auto',
      width: '100%',
      backgroundSize: 'auto',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}>
    <ProjectsBackground>
    <ButtonContainer>
          {projects.map((project, index) => (
            <ToggleButton
              key={index}
              onClick={() => toggleProjectVisibility(project.title)}
            >
              {project.title}
            </ToggleButton>
          ))}
        </ButtonContainer>
      <ProjectsContainer>
          {projects.map(
            (project, index) =>
              projectsVisibility[project.title] && (
                <ProjectCard key={index} {...project} />
              )
          )}
          <NextButtonContainer>
        <NextPageButton to = '/skills' />
        </NextButtonContainer>    
        </ProjectsContainer>
        <TheButton />
      </ProjectsBackground>
    </Parallax>
  );
};

export default ProjectsSection;
