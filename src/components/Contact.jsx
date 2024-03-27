import React from 'react'; 
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/svg/Contact.svg';
import TheButton from './Button';


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
`;

const ContactContainer = styled.section`
  padding: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7); // Semi-transparent black background
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: inline-block; // Keeps the container size as per its content
`;


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

const Input = styled.input`
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #e60073; /* Neon accent */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    animation: glowOnHover 1.5s infinite alternate;
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
`;

const Contact = () => {
    return (
<Parallax strength={300} bgImage={BackgroundImage} bgImageStyle={{ 
  // Ensures the image covers the available space, centered, and without repeating
  height: 'auto',
  width: '100vw',
  backgroundSize: 'auto',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
}}>
  <ContactBackground>
  <ContactContainer>
  <TheButton /> {/* Button with Modal Cotent per location */}
    <FormContainer>
      <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type = "email" placeholder='Your Email' />
          <TextArea placeholder='Your Mesage' />
          <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
      </FormContainer>
  </ContactContainer>
  </ContactBackground>
  </Parallax>


)
}


export default Contact