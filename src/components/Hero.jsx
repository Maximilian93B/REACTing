import React from 'react'
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactingHeroPage.svg';



// Hero Section Container Styles 
const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Welcome to the Future</HeroTitle>
                <HeroSubheading>Explore my Projects and Journey though tech</HeroSubheading>
                <HeroCTA href="#projects">View Projects</HeroCTA>
            </HeroContent>
        </HeroContainer>
        </Parallax>
    );
}; 

export default Hero; 