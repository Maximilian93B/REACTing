import React from 'react';
import styled from 'styled-components';

// this file defines structure and styles for the Project Cards

const Card = styled.div`
background-color: #222; // Dark backgrounds are great for contrast
color: #fff;
border-radius: 0; // Pixel art often lacks smooth curves
overflow: hidden;
width: 300px; // Consider adjusting based on your layout
height: 450px;
padding: 20px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // A more subtle shadow
transition: transform 0.2s ease-in-out;
border: 3px solid #e60073; // Neon-like border for emphasis
display: flex;
flex-direction: column;
font-family: 'Press Start 2P', cursive; // Google Fonts pixelated font

&:hover {
  transform: translateY(-5px);
  box-shadow:
    0 0 10px #e60073,
    0 0 20px #e60073,
    0 0 40px #e60073,
    0 0 80px #e60073; // Neon pink glow effect
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
flex: 1;
overflow: auto;
padding: 8px 0;
background: repeating-linear-gradient(
  0deg,
  rgba(255, 255, 255, 0.02),
  rgba(255, 255, 255, 0.02) 1px,
  transparent 1px,
  transparent 2px
); // Simulates the scan lines of a CRT monitor

&::-webkit-scrollbar {
  display: none; // Keeps the scrollbar hidden
}
`;

const CardTitle = styled.h3`
margin: 0;
  font-size: 1.2rem; // Pixel fonts can be hard to read at smaller sizes
  color: #00ff00;
`;

const CardDescription = styled.p` 
font-size: 0.8rem; // Smaller text, but ensure readability
  line-height: 1.5;
  text-shadow: 1px 1px 0 #000; // Adds a pixel shadow for depth
`;

const CardLink = styled.a`
display: inline-block;
  margin-top: 8px;
  color: #e60073; // Neon accent remains consistent
  font-size: 0.8rem; // Consistent with the pixel theme
  text-decoration: underline dotted #e60073;
  
  &:hover {
    color: #ff00ff; // Change color on hover for interaction feedback
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