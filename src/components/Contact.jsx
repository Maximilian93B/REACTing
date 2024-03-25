import React from 'react'; 
import styled from 'styled-components';


const ContactContainer = styled.section`
  background-color: #121212; /* Dark theme background */
  padding: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 20px;
  }
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
        <ContactContainer>
            <Form>
                <Input type="text" placeholder="Your Name" />
                <Input type = "email" placeholder='Your Email' />
                <TextArea placeholder='Your Mesage' />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
        </ContactContainer>

    )
}


export default Contact