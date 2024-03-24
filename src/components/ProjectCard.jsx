import React from 'react';
import styled from 'styled-components';

// this file defines structure and styles for the Project Cards

const Card = styled.div `
    background-color: #222;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
    transform: scale(1.05);
    }
`;

const CardImage = styled.img `
width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent =  styled.h3 `
padding: 16px;
;`

const CardTitle = styled.h3 `
margin: 0;
font-size: 1.5rem;
`;

const CardDescription = styled.p ` 
font-size: 1rem;
`;

const CardLink = styled.a `
display: inline-block;
margin-top: 8px;
color: #e60073; // Neon accent
text-decoration: none;

&:hover {
  text-decoration: underline;
}

`;

const ProjectCard = ({title, description, imageUrl, projectUrl, repoUrl }) => {
    return (
        <Card>
           <CardImage src={imageUrl} alt={title} />
            <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink href={projectUrl} target='_blank' rel='noopener noreferrer'>
            View Project
        </CardLink>
        {repoUrl && (
            <CardLink href={repoUrl} target='_blank' rel='noopener noreferrer'>
                View Code
            </CardLink>
        )}
            </CardContent>
        </Card>
    );
};

export default ProjectCard;