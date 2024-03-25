import React from 'react';
import styled from 'styled-components';
import AvatarImg from '../assets/GithubPIc - Copy.jpg'

// Styled components for About Section 

 // Usinh Flex for a side-by-sde layout
const Section = styled.section`
    color: white;
    background-color: #121212; // Keep the cyberpunk theme dark background
    padding: 40px;
    min-height: 100vh; // Full viewport height
    display: flex;
    align-items: center; // Vertically center the content
    justify-content: center; // Align content to the left
    text-align: left; // Ensure text aligns to the left
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

  const Avatar = styled.img`
  width: 250px; // Adjust size as needed
  height: 250px;
 

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px; // Space between avatar and text content on small screens
  }
  `


const Heading = styled.h1` 
    font-size: 2.5rem;
    margin-bottomL 20px; 

`;

const Paragraph = styled.p` 
font-size: 1.2rem;
`;

const About = () => {

    return (
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
                    <Avatar src={AvatarImg} alt="Your Name" />  
            </ContentContainer>     
        </Section>
    )

}

export default About;  
