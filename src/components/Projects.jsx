// Project Section 

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectImage1 from '../assets/DnDevs.png';
import ProjectImage2 from '../assets/NerdHerdHR.png';

// Styles for Container to hold cards 
const ProjectsContainer = styled.div`
display: flex; // Use flexbox to layout children horizontally
flex-wrap: wrap; // Allow items to wrap to next line if the container is too narrow
gap: 20px; // Space between items
padding: 20px; // Padding around the entire container
justify-content: center; // Center the items horizontally
align-items: center;
min-height: 100vh; 
&.global-gradient-background {
    // Inherits styles from .global-gradient-background class
  }
@media (max-width: 768px) {
    flex-direction: column; // Stack the cards vertically on smaller screens
    align-items: center; // Center the cards vertically
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
    // Add More projects 
];


//Map though projects Array and render cards for each project
const ProjectsSection = () => {
    console.log('Rendering ProjectsSection');
    return (
        <ProjectsContainer className="global-gradient-background">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </ProjectsContainer>
    );
};


export default ProjectsSection;
