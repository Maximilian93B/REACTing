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
    background-color:#A9A9A9;
    border-radius: 8px;
`;


const MarqueeInnerContainer = styled.div`
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

    return(
    <Marquee 
        onMouseEnter={() => setDuration('120s')}
        onMouseLeave = {() => setDuration('60s')}>
        <MarqueeInnerContainer duration={duration}>
            <MarqueeContent>
                <SkillIcon><i className="fab fa-github"></i></SkillIcon>
                <SkillIcon><i className="fab fa-codepen"></i></SkillIcon>
                <SkillIcon><i className="fab fa-free-code-camp"></i></SkillIcon>
                {/* Repeat Icons for seameless loop */}
                <SkillIcon><i className="fab fa-github"></i></SkillIcon>
                <SkillIcon><i className="fab fa-codepen"></i></SkillIcon>
                <SkillIcon><i className="fab fa-free-code-camp"></i></SkillIcon>
            </MarqueeContent>
        </MarqueeInnerContainer>
    </Marquee>
    );
};


export default SkillsMarquee;