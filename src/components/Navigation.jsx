import styled, { keyframes } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

// Neon glow animation

const Brand = styled.a`
  color: #e60073; // Neon effect for the brand as well
  font-weight: 700;
  text-decoration: none;
  margin-right: auto; // Pushes all subsequent elements (nav links) to the right
`;


// Styled navigation bar with dark background and futuristic font
const Nav = styled.nav`
  background: linear-gradient(270deg, #0f0c29, #302b63, #24243e);
  background-size: 600% 600%;
  animation: AnimationName 16s ease infinite;
  padding: 25px;
  display: flex;
  justify-content: flex-end; /* Adjusted to align links to the right */
  align-items: center;
  font-family: 'Orbitron', sans-serif;
  border-radius: 2px;
  @media (max-width: 768px) {
    margin: 10px 5px;
`;


// Styled NavLink with neon effect
const NavLink = styled(RouterNavLink)`
  color: #e60073; // Neon pink
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 20px;
  
  &:hover {
    text-decoration: underline;
  }
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
          <Brand href= "/">MDBDev</Brand>{/* Replace MDBDev with your logo or brand name */}
            <NavLink to="/about" style={activeStyle}>About Me</NavLink>
            <NavLink to="/projects" style={activeStyle}>Projects</NavLink>
            <NavLink to="/contact" style={activeStyle}>Contact</NavLink>
            <NavLink to="/resume" style={activeStyle}>Resume</NavLink>
        </Nav>
    );
}

export default Navigation;
