import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactAboutme.svg';
import TheButton from './Button';

// Styled components for About Section 

 // Usinh Flex for a side-by-sde layout
 const Section = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center; // Center children vertically.
 align-items: center; // Center children horizontally.
 height: 100vh;
 width: 100%;
 background-image: url(${BackgroundImage});
 background-size: cover;
 background-position: center;
 position: relative;;
 }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // Take up the full width of the section
  max-width: 1200px; // Max width to prevent overly wide layouts

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack items vertically on smaller screens
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px; // Limit the content width for readability
  // Consider adding padding or margin if needed, for example:
  padding-right: 20px; // Add padding on the right for breathing space
  @media (max-width: 768px) {
    padding-right: 0; // Remove right padding on smaller screens
  }
  `;



const Heading = styled.h1` 
    font-size: 2.5rem;
    margin-bottomL 20px; 
    font-family: 'Press Start 2P', cursive;
    color: black; 
`;

const Paragraph = styled.p` 
font-size: 1.2rem;
`;

const About = () => {

    return (
      <Parallax strength={300} bgImage={BackgroundImage} bgImageStyle={{ 
        // Ensures the image covers the available space, centered, and without repeating
        height: 'auto',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000', // Add a black background color directly
      }}>
        <Section>
            <ContentContainer>
                <ContentWrapper>
                    <Heading>About Me</Heading>
                    <TheButton /> {/* Button with Modal Cotent per location */}
                    <Paragraph>
                      
                    </Paragraph> 
                    </ContentWrapper>
            </ContentContainer>     
        </Section>
        </Parallax>
    )

}

export default About;  
