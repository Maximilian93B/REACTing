import React, {useState, useEffect} from 'react'; 
import styled, { keyframes }from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/Contact.svg';
import TheButton from './Button';
import GameHeader from './RetroHeader';
import NextPageButton from './NextButton';

// Keyframes up top
const scrollCredits = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(-100%);
}
`;

// styles for Background
const ContactBackground = styled.div`
display: flex;
flex-direction: column;
justify-content: center; // Center children vertically.
align-items: center; // Center children horizontally.
height: 100vh;
width: 100%;
background-size: cover;
background-position: center;
position: relative;

@media (max-width: 768px) {
  flex-direction: column-reverse;
  text-align: center;
  gap: 20px; // Adds space between items when stacked
}
`;

// Styles for Container 
const ContactContainer = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%; // Take up the full width of the section
max-width: 1200px; // Max width to prevent overly wide layouts

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack items vertically on smaller screens
    text-align: center;
  }
} 
`;

// styles for form container 
const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7); // Semi-transparent black background
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: inline-block; // Keeps the container size as per its content
  
  @media (max-width: 768px) {
    width: 80%; // Adjust width for smaller screens
  }

  @media (max-width: 480px) {
    width: 95%; // More width on very small screens
    padding: 15px; // Adjust padding
  }

`;

// Styles for Form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px; 
  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Styles for input in form 
const Input = styled.input`
font-family: 'Press Start 2P', cursive;
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 480px) {
    padding: 8px; // Slightly reduce padding
  }
`;

// Form Text Area styles
const TextArea = styled.textarea`
font-family: 'Press Start 2P', cursive;
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  @media (max-width: 480px) {
    padding: 8px; // Slightly reduce padding
  }
`;

// Subit Button styles
const SubmitButton = styled.button`
font-family: 'Press Start 2P', cursive;
  background-color: #e60073; /* Neon accent */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff007a;
  transform: scale(1.1); /* Make the button grow slightly on hover */
   
  }
}

@keyframes glowOnHover {
  from {
    box-shadow: 0 0 5px #e60073, 0 0 10px #e60073;
  }
  to {
    box-shadow: 0 0 20px #e60073, 0 0 30px #e60073;
  }
}

@media (max-width: 480px) {
  padding: 8px 16px; // Adjust padding for smaller screens
}
`;
 

// Modal Styles 

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`;

const CreditsContent = styled.div`
position: absolute; // Allow this to move within the Credits
width: 100%;
animation: ${scrollCredits} 20s linear infinite;
`;


// Rolling Credit styles 
const Credits = styled.div`
background-color: #000;
color: #fff;
padding: 10px;
border-radius: 10px;
width: 60%; // Adjust width 
height: 40vh; // Adjust height
overflow: hidden;
text-align: center;
position: relative;
font-family: 'Press Start 2P', cursive;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
line-height: 1.5;

@media (max-width: 768px) {
  width: 80%; // Adjust width for tablets
  height: 50vh; // Adjust height if necessary
}

@media (max-width: 480px) {
  width: 95%; // More width for small screens
  height: 100%; // Auto height based on content
  padding: 15px; // Adjust padding
  font-size: 0.9rem; // Adjust font size for readability
}
`;

// Close Button for Modal styles
const CloseButton = styled.button`
font-family: 'Press Start 2P', cursive;
  background-color: #e60073; /* Neon accent */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


// Rolling Credits Data 
const creditData =  [
  "I Hope you enjoyed my Portfolio, If you want to collaborate or talk to me about employment opportunities then please fill out the contact form and i will be in touch :).",
  " Happy Coding!",
  "Lead Developer: MDBDev",
  "UI/UX Design: MDBDev",
  "Backend Development: MDBDev",
  "QA Testing: MDBDev",
]


const NextButtonContainer = styled.div`
position: absolute;
bottom: 400px; 
right: 30px; 
padding: 40px;
`;


const Contact = () => {
  // use state to manage  modal visibility 
  const [showModal, setShowModal] = useState(false); // Set to false to initially hide Modal

   // useEffect to automatically show modal when page loads 
   useEffect(() => {
    // Set Delay for Modal 
    const timer = setTimeout(() => setShowModal(true), 1000); // Change state to true to displau Modal
    return() => clearTimeout(timer);
   }, [])
    // Return Contact 
    return (
<Parallax strength={300} bgImage={BackgroundImage} bgImageStyle={{ 
  height: 'auto',
  width: '100vw',
  backgroundSize: 'auto',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
}}>
  {showModal && (
    <Modal>
       <Credits>
        <CreditsContent>
            {creditData.map((credit, index) => (
              <h2 key={index}>{credit}</h2> // Display each credit in a separate <h2> for the animation
            ))}
            <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
             </CreditsContent>
          </Credits>
        </Modal>
  )}
    <ContactBackground>
    <GameHeader text="Continue?"></GameHeader>
    <ContactContainer>
    <FormContainer>
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type = "email" placeholder='Your Email' />
        <TextArea placeholder='Your Mesage' />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </FormContainer>
    <TheButton  /> {/* Button with Modal Cotent per location */}
      <NextButtonContainer>
        <NextPageButton to='/' />
      </NextButtonContainer>
    </ContactContainer>
    </ContactBackground>
    </Parallax>


)
}


export default Contact