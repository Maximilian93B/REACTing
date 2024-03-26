import React from 'react';
import styled, { keyframes } from 'styled-components';


// Footer animation 
const animateBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Sticky Footer
// Gradient background 
// background Animation for effects 
const FooterContainer = styled.footer`
  position: sticky; 
  bottom: 0; 
  z-index: 2; 
  background: linear-gradient(270deg, #0f0c29, #302b63, #24243e);
  background-size: 600% 600%;
  animation: ${animateBackground} 16s ease infinite;
  padding: 5px;
  border-radius: 2px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Press Start 2P', sans-serif; /* Pixel art font */
  }
`

const FooterText = styled.p`
  color: #e60073; // Matching neon color for consistency
  font-size: 1rem; 
`;

const FooterLinks = styled.div`
  margin: 10px 0;
  display: flex; // To layout links horizontally
  flex-wrap: wrap; // Allow wrapping for multiple links
  justify-content: center; // Center links for better aesthetics
`;

const Link = styled.a`
  color: #e60073; // Neon color for links
  margin: 0 10px; // Space out the links
  text-decoration: none;
  font-size: 0.8rem; 

  &:hover {
    animation: glow 1.5s infinite alternate;
  }
`;

const glow = keyframes`
  from {
    text-shadow: 0 0 4px #fff, 0 0 10px #e60073, 0 0 20px #e60073;
  }
  to {
    text-shadow: 0 0 6px #fff, 0 0 12px #e60073, 0 0 22px #e60073;
  }
`;



// Footer Compononent with styes 
// inlcude Containers 
// incldue Text
// incldue Links 
// export 

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>©{new Date().getFullYear()} MdbDev.All rights reserved</FooterText>
      <FooterLinks className={glow}>
        <Link>{/* Links here  */}</Link>
      </FooterLinks>
    </FooterContainer>
  );
};

export  default Footer;
