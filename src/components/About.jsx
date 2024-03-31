import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactAboutme.svg';
import TheButton from './Button';
import ReactAvatar from '../assets/svg/ReactAvatar.svg';
import NextPageButton from './NextButton';
// Styled components for About Section 

 // Usinh Flex for a side-by-sde layout
 const Section = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 100vh; /* Use min-height to ensure content isn't clipped */
 width: 100vw;
 background-image: url(${BackgroundImage});
 background-size: cover;
 background-position: center;

`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // Take up the full width of the section
  max-width: 1200px; // Max width to prevent overly wide layouts

  // Tablet 
  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack items vertically on smaller screens
    text-align: center;
    padding: 20px;
  }
  // Mobile 
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 20px; // Increased padding for mobile devices
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px; 
  padding-right: 20px; 
 
  // Tablet
  @media (max-width: 768px) {
    padding-right: 0; // Remove right padding on smaller screens
  }

  // Mobile 
  @media (max-width: 480px) {
    max-width: 90%; // Allow some margin on the sides
    padding-right: 0; // Remove right padding
    margin: 0 5%; // Center content with margin instead of padding
  }

  `;


const Heading = styled.h1` 
    font-size: 2.5rem;
    margin-bottomL 20px; 
    font-family: 'Press Start 2P', cursive;
    color: black; 

    @media (max-width: 480px) {
      font-size: 1.8rem; // Reduce font size for small screens
    }
`;

const Paragraph = styled.p` 
font-size: 1.2rem;

@media (max-width: 480px) {
  font-size: 1rem; // Smaller font size for better readability on mobile
`;

const AvatarSlideEffect = keyframes`
from {
  transform: translateX(100%); // Start off-screen to the right
}
to {
  transform: translateX(-30%); // End at its intended position
}

`;

// Avatar styles 

const Avatar = styled.img`
width: 800px;
height: 600px;
background: transparent;
position: absolute; // Use absolute positioning to place the avatar
right: 300px; // Distance from the right edge of its container
bottom: 140px; // Distance from the top of its container
animation: ${AvatarSlideEffect} 1s ease-out forwards; // Use the animation


@media (max-width: 480px) {
  width: 100%; // Use percentage-based sizing for responsiveness
  height: auto; // Maintain aspect ratio
  right: 10%; // Adjust for center alignment
  bottom: 200px; // Adjust bottom positioning to not overlap other content
}
`;


const About = () => {
  // set Avatar to initially be false to be hidden
  const[showAvatar, setShowAvatar] = useState(false);

  // set Timer to set state to true 
  useEffect(() => {
    const timer = setTimeout(()=> {
      setShowAvatar(true) ;
    }, 5000);

    // return and clear timer 
    return () => clearTimeout(timer);
  }, []);

    return (
      <Parallax strength={300} bgImage={BackgroundImage} bgImageStyle={{ 
        // Ensures the image covers the available space, centered, and without repeating
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000', // Add a black background color directly
      }}>
        <Section>
            <ContentContainer>
                <ContentWrapper>
                  <Avatar
                  src={ReactAvatar}
                  alt="Avatar"
                  style={{ showAvatar }} // Apply the slide-in effect
                  /> 
                  <Heading>About Me</Heading>
                    <TheButton /> {/* Button with Modal Cotent per location */}
                    <Paragraph>
                     <NextPageButton to='/projects' /> 
                    </Paragraph> 
                    </ContentWrapper>
            </ContentContainer>     
        </Section>
        </Parallax>
    )

}

export default About;  
