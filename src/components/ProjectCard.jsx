import React from 'react';
import styled from 'styled-components';

// this file defines structure and styles for the Project Cards

const Card = styled.div`
  background-color: #222;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; // Example fixed width
  height: 400px; // Example fixed height
  padding: 20px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
  object-position: center;
`;

const CardContent = styled.div`
  flex: 1; // Takes up the available space
  overflow: auto; // Allows scrolling for overflow content
  padding: 8px 0; // Example padding, adjust as needed
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardTitle = styled.h3`
margin: 0;
font-size: 1.5rem;
`;

const CardDescription = styled.p` 
font-size: 1rem;
`;

const CardLink = styled.a`
display: inline-block;
margin-top: 8px;
color: #e60073; // Neon accent
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`;

const CardFooter = styled.div`
  padding-top: 8px; // Space between content and footer
`;

const ProjectCard = ({title, description, imageUrl, projectUrl, repoUrl }) => {
    return (
        <Card>
            <CardImage src={imageUrl} alt={title} />
            <CardContent>
                <h3 className={CardTitle}>{title}</h3>
                <p className={CardDescription}>{description}</p>
            </CardContent>
            <CardFooter>
                {projectUrl && <CardLink href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</CardLink>}

                {repoUrl && <CardLink href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</CardLink>}
            </CardFooter>
            </Card>
    );
};

export default ProjectCard;