import styled, { keyframes } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

// Neon glow animation

const glow = keyframes`
  from {
    text-shadow: 0 0 8px #fff, 0 0 12px #fff, 0 0 24px #e60073, 0 0 48px #e60073;
  }
  to {
    text-shadow: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #e60073, 0 0 38px #e60073;
  }
`;


// Styled navigation bar with dark background and futuristic font
const Nav = styled.nav`
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
  justify-content: space-between;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
  border-radius: 2px;
`;

// Styled NavLink with neon effect
const NavLink = styled(RouterNavLink)`
  color: #e60073; // Neon pink
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  
`;

const NeonIndicator = styled.span `
height: 3px;
  width: 100%;
  background: #e60073;
  display: block;
  margin-top: 5px;
  box-shadow: 0 0 8px #e60073, 0 0 12px #e60073, 0 0 24px #e60073, 0 0 48px #e60073;
`;

const activeStyle = ({ isActive }) => isActive ? { color: '#fff', animation: 'none' } : {};

const Navigation = () => {
    return (
        <Nav>
            <NavLink to="/about" style={activeStyle}>About Me</NavLink>
            <NavLink to="/projects" style={activeStyle}>Projects</NavLink>
            <NavLink to="/contact" style={activeStyle}>Contact</NavLink>
            <NavLink to="/resume" style={activeStyle}>Resume</NavLink>
        </Nav>
    );
}

export default Navigation;
