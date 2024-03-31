import React from 'react';
import styled from 'styled-components';

// this file defines structure and styles for the Project Cards

const Card = styled.div`
background-color: #222; // Dark backgrounds are great for contrast
color: #fff;
border-radius: 0; // Pixel art often lacks smooth curves
overflow: hidden;
width: 600px; // Consider adjusting based on your layout
height: 500px;
padding: 20px;
transition: transform 0.2s ease-in-out;
border: 3px solid #e60073; // Neon-like border for emphasis
display: flex;
flex-direction: column;
font-family: 'Press Start 2P', cursive; // Google Fonts pixelated font

@media (max-width: 768px) {
  width: 90%; // Use a percentage-based width for better responsiveness
  height: auto; // Adjust height automatically based on content
  padding: 15px; // Slightly reduce padding
}

@media (max-width: 480px) {
  width: 95%; // Allow the card to take up more space on very small screens
  padding: 10px; // Further reduce padding for small screens
}

`;

const CardImage = styled.img`
width: 100%;
height: auto; // Adjust height automatically to maintain aspect ratio
object-fit: cover;
object-position: center;
border-radius: 5px;
`;

const CardContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: 8px 0;
  0% { background-position: 0 0; }
  100% { background-position: -100px 0; } /* Adjust based on sprite sheet */
}

.sprite {
  display: inline-block;
  width: 20px; /* Adjust based on sprite size */
  height: 20px; /* Adjust based on sprite size */
  background-image: url('path/to/sprite-sheet.png');
  animation: sprite-animation 0.5s steps(4) infinite; /* Adjust based on need */
}
`;

const CardTitle = styled.h3`
margin: 0;
  font-size: 1.2rem; // Pixel fonts can be hard to read at smaller sizes
  color: #00ff00;

  @media (max-width: 768px) {
    font-size: 1rem; // Slightly reduce font size on smaller screens
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; // Further reduce for very small screens
  }
`;

const CardDescription = styled.p` 
font-size: 0.9rem; // Smaller text, but ensure readability
  line-height: 2;

  @media (max-width: 768px) {
    font-size: 0.8rem; // Adjust font size for readability
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; // Further reduce for small screens
  }
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

  @media (max-width: 768px) {
    font-size: 0.7rem; // Slightly reduce font size
  }

  @media (max-width: 480px) {
    font-size: 0.6rem; // Further reduce for very small screens
  }
`;

const CardFooter = styled.div`
  padding-top: 8px; // Space between content and footer
`;

const ProjectCard = ({title, description, imageUrl, projectUrl }) => {
return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
      </CardContent>

    <CardFooter>
    {projectUrl && <CardLink href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</CardLink>}
    </CardFooter>
    </Card>
  );
};

export default ProjectCard;