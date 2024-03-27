import styled, { keyframes } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

// Brand logo on Left side of Nav
const Brand = styled.a`
  color: #e60073; // Neon effect for the brand as well
  font-weight: 700;
  text-decoration: none;
  margin-right: auto; // Pushes all subsequent elements (nav links) to the right
`;


// Styles for Nav Container 
// Sticky Nav Bar 
// Simple styles
// Use PS2P font --> pixelated theme 
const Nav = styled.nav`
  position: sticky; 
  top: 0; 
  z-index: 1; 
  background: linear-gradient(270deg, #0f0c29, #302b63, #24243e);
  background-size: 600% 600%;
  animation: AnimationName 16s ease infinite;
  padding: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Press Start 2P', sans-serif; 
  border-radius: 2px;
  @media (max-width: 768px) {
    margin: 10px 5px;
  }
`;

// Decalre flicker animation
const flicker = keyframes `
0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
  ext-shadow:
  0 0 4px #fff,
  0 0 11px #e60073,
  0 0 19px #e60073,
  0 0 40px #e60073,
  0 0 80px #e60073,
  0 0 90px #e60073,
  0 0 100px #e60073,
  0 0 150px #e60073;
opacity: 1;
}
20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
  text-shadow: none;
    opacity: 0.5;
}
`;


// Styled NavLink with neon effect
const NavLink = styled(RouterNavLink)`
color: #e60073; // Neon pink
text-decoration: none;
font-weight: 500;
letter-spacing: 0; /* Adjusted for pixel font */
margin: 0 20px;

&:hover {
  /* Call flicker animation */
  animation: ${flicker} 1.5s infinite;
}
`;



const activeStyle = ({ isActive }) => isActive ? { color: '#fff', animation: 'none' } : {};

const Navigation = () => {
    return (
        <Nav>
          <Brand href= "/">MDBDev</Brand>
          <NavLink to ="/home" style={activeStyle}>Home</NavLink>
            <NavLink to="/about" style={activeStyle}>About Me</NavLink>
            <NavLink to="/projects" style={activeStyle}>Projects</NavLink>
            <NavLink to="/skills" style={activeStyle}>Skills</NavLink>
            <NavLink to="/contact" style={activeStyle}>Contact</NavLink>
        </Nav>
    );
}

export default Navigation;
