import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactAboutme.svg';
import TheButton from './Button';
import ReactAvatar from '../assets/svg/REactAvatar.2.png';
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
width: 600px;
height: 600px;
background: transparent;
position: absolute; // Use absolute positioning to place the avatar
right: 100px; // Distance from the right edge of its container
bottom: 140px; // Distance from the top of its container
animation: ${AvatarSlideEffect} 1s ease-out forwards; // Use the animation
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
                  <Avatar
                  src={ReactAvatar}
                  alt="Avatar"
                  style={{ showAvatar }} // Apply the slide-in effect
                  /> 
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
