import React from 'react'
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/ReactingHeroPage.svg';
import TheButton from './Button';


// Hero Section Container Styles 
const HeroContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: black;
    font-family: 'Press Start 2P', cursive;
`;

const HeroContent = styled.div`
    max-width: 600px;
    padding: 20px;
    margin-top: 100px;
`; 

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

const HeroSubheading = styled.p`
    font-size: 1.2rem;
    margin-bottom: 40px;
`;

const Hero = () => {
    return (
        <Parallax strength={200} bgImage={BackgroundImage} bgImageStyle={{ 
            // Ensures the image covers the available space, centered, and without repeating
            width: '100%',
            height: 'auto',
            backgroundSize: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
        <HeroContainer>
            <HeroContent>
                <HeroTitle>Welcome to the Future</HeroTitle>
                <HeroSubheading>Explore my Projects and Journey though tech</HeroSubheading>
                <TheButton /> {/* Button with Modal Cotent per location */}
            </HeroContent>
        </HeroContainer>
        </Parallax>
    );
}; 

export default Hero; 