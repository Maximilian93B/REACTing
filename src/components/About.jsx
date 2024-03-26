import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactAboutme.svg';
// Styled components for About Section 

 // Usinh Flex for a side-by-sde layout
const Section = styled.section`
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

`;

const Paragraph = styled.p` 
font-size: 1.2rem;
`;

const About = () => {

    return (
      <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
        // Ensures the image covers the available space, centered, and without repeating
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Section>
            <ContentContainer>
                <ContentWrapper>
                    <Heading>About Me</Heading>
                    <Paragraph>
                        I/m a web developer with a passion for creating immersive digital experiences. 
                        My journey into the world of development is driven by a love for technology and design, 
                        blending the two to craft websites and applications that not only perform well but also 
                        captivate and engage. Dive into my portfolio to explore the projects that I/ve brought to life.
                    </Paragraph> 
                    </ContentWrapper>
            </ContentContainer>     
        </Section>
        </Parallax>
    )

}

export default About;  
