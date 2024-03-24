import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: linear-gradient(270deg, #0f0c29, #302b63, #24243e);
background-size: 600% 600%;
animation: AnimationName 16s ease infinite;

@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
  padding: 25px;
  display: flex;
  padding: 20px;
  border-radius: 2px;
  text-align: center;
  display: flex;
  flex-direction: column; // Stack  vertically
  justify-content: center; // Center vertically
  align-items: center; // Center horizontally
`;



const FooterLinks = styled.div `
margin: 10px 0
`;

const Link = styled.a`
  color: #e60073; // Neon color for links
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;



const Footer = () => {
  return (
    <FooterContainer>
      <p> {new Date().getFullYear()} MdbDev.All rights reserved</p>
      <FooterLinks>

      </FooterLinks>
    </FooterContainer>
  )
}

export  default Footer;
