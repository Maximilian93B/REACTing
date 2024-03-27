// Project Section 

import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectImage1 from '../assets/DnDevs.png';
import ProjectImage2 from '../assets/NerdHerdHR.png';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactProjects.svg';
import TheButton from './Button';

// Styles for Container to hold cards 
const ProjectsBackground = styled.div`
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

const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;   
    color: #fff;
    text-align: center;
    position: relative;
    gap: 40px;
    @media (max-width: 768px) {
        margin-bottom: 15px; /* Smaller screens */
        justify-content: center;
        text-align: center;
        /* You might want to adjust the gap for smaller screens */
        gap: 10px;
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
`;



// Project Data 
const projects = [
    {
        title: "DnDevs",
        description: "Welcome to DungeonsAndDevs 🏰👨‍💻, where coding and fantasy merge in an epic learning adventure.",
        imageUrl: ProjectImage1,
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/yourusername/projectone",
        isVisible: false, // Adding for useState to toggle project View
    },
    
    {
        title: "NerdHerdHR",
        description: "NerdHerdHR is a all in one Human Resources tool all in your CLI .",
        imageUrl: ProjectImage2,
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/Maximilian93B/NerdHerdHR",
    },
    
    {
        title: "Socail Mind API",
        description: "SocialMindAPI is a back-end platform designed to power social networking features with ease and efficiency.",
        imageUrl: "path_to_project_one_image",
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/yourusername/projectone",
    },
    
    {
        title: "Project Four",
        description: "This is a brief description of Project One.",
        imageUrl: "path_to_project_one_image",
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/yourusername/projectone",
    },
     
];


//Map though projects Array and render cards for each project
const ProjectsSection = () => {
    console.log('Rendering ProjectsSection');

  const [projectsVisibility, setProjectsVisibility] = useState(
    projects.reduce((acc, projects, index)=>{
        acc[index] = false; // Iinit all projects as false 
        return acc; 
    }, {})
  );
  
  const toggleProjectVisibility = (index) => {
    setProjectsVisibility(prevState => ({
      ...prevState,
      [index]: !prevState[index]
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
            <ProjectsContainer>
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                <ToggleButton onClick={() => toggleProjectVisibility(index)}>
                    {project.title}
                </ToggleButton>
                {projectsVisibility[index] && <ProjectCard {...project} />}
                </React.Fragment>
            ))}
            </ProjectsContainer>
        </ProjectsBackground>
        </Parallax>
    );
};

export default ProjectsSection;
