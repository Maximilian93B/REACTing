import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


const scroll = keyframes`
    from {
        transform: translateX(100%); // Start from the middle
    }
    to {
        transform: translateX(-100%); // End at -50% to loop back
    }
`;

const Marquee = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    background-color: white;
    border-radius: 8px;
`;

// Needed to add extra container to be able to control the Marquee content more precisisely 
const InnerMarqueeContainer = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} ${props => props.duration} linear infinite;
`;

const MarqueeContent = styled.ul`
    display: inline-block; 
    padding-left: 100%;
`;

const SkillIcon = styled.li`
    font-size: 2rem; // Adjust if needed
    color: #e60073;
    display: inline-flex;
    margin-right: 2rem;
`;



const SkillsMarquee = () => {
    // set state to handle slowing down Marquee on mouseEnter and mouseLeae
    const [duration, setDuration] = useState('25s');

    // Return Marquee with onMoudr logic and params 
    // Include:
    //InnerContainer
    // Content
    // Skill Icon 
    return(
    <Marquee 
        onMouseEnter={() => setDuration('120s')}
        onMouseLeave = {() => setDuration('60s')}>
        <InnerMarqueeContainer duration={duration}>
            <MarqueeContent>
                <SkillIcon><i className="fab fa-github"></i></SkillIcon>
                <SkillIcon><i className="fab fa-codepen"></i></SkillIcon>
                <SkillIcon><i className="fab fa-free-code-camp"></i></SkillIcon>
                <SkillIcon><i className="fa-brands fa-linux"></i></SkillIcon>
                <SkillIcon><i className="fa-brands fa-js"></i></SkillIcon>
                <SkillIcon></SkillIcon>
                {/* Repeat Icons for seameless loop */}
                <SkillIcon><i className="fab fa-github"></i></SkillIcon>
                <SkillIcon><i className="fab fa-codepen"></i></SkillIcon>
                <SkillIcon><i className="fab fa-free-code-camp"></i></SkillIcon>
            </MarqueeContent>
        </InnerMarqueeContainer>
    </Marquee>
    );
};


export default SkillsMarquee;