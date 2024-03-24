// Project Section 

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

// Styles for Container to hold cards 
const ProjectsContainer = styled.div `
background-color: #121212;
display: flex; // Use flexbox to layout children horizontally
flex-wrap: wrap; // Allow items to wrap to next line if the container is too narrow
gap: 20px; // Space between items
padding: 20px; // Padding around the entire container
justify-content: center; // Center the items horizontally
align-items: center;
min-height: 100vh; 
@media (max-width: 768px) {
    flex-direction: column; // Stack the cards vertically on smaller screens
    align-items: center; // Center the cards vertically
  }
`;

// Project Data 
const projects = [
    {
        title: "Project One",
        description: "This is a brief description of Project One.",
        imageUrl: "path_to_project_one_image",
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/yourusername/projectone",
    },
    
    {
        title: "Project Two",
        description: "This is a brief description of Project One.",
        imageUrl: "path_to_project_one_image",
        projectUrl: "https://projectone.com",
        repoUrl: "https://github.com/yourusername/projectone",
    },
    
    {
        title: "Project Three",
        description: "This is a brief description of Project One.",
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
        <ProjectsContainer>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </ProjectsContainer>
    );
};


export default ProjectsSection;
