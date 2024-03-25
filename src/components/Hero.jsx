import React from 'react'
import styled from 'styled-components';

// Hero Section Container Styles 
const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    color: #fff;
    text-align: center;
    position: relative;
`;

const HeroContent = styled.div`
    max-width: 600px;
    padding: 20px;
`

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

const HeroSubheading = styled.p`
    font-size: 1.2rem;
    margin-bottom: 40px;
`;


// Hero Call to Action 
const HeroCTA = styled.a`
display: inline-block;
  background: #e60073;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: #c3005d;
  }
`;


const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Welcome to the Future</HeroTitle>
                <HeroSubheading>Explore my Projects and Journey though tech</HeroSubheading>
                <HeroCTA href="#projects">View Projects</HeroCTA>
            </HeroContent>
        </HeroContainer>
    );
}; 

export default Hero; 