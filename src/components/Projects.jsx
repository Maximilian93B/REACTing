// Project Section 

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectImage1 from '../assets/DnDevs.png';
import ProjectImage2 from '../assets/NerdHerdHR.png';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactProjects.svg';
import TheButton from './Button';

// Styles for Container to hold cards 
const ProjectsContainer = styled.div`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    @media (max-width: 768px) {
        justify-content: center; // Center content on smaller screens
        text-align: center;
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
    return (
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            height: 'auto',
            width: '100%',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
        <ProjectsContainer>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            <TheButton /> {/* Button with Modal Cotent per location */}
        </ProjectsContainer>
        </Parallax>
    );
};


export default ProjectsSection;
