import React, { useState, useRef } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 786px) {
    width: 100%;
    padding-inline: 15px;

    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #ece9e9;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #ece9e9;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #8b197a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  @media screen and (max-width: 786px) {
    padding-bottom: 20px;
  }
`;

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          location.reload();
        },
        (error) => {
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="user_name" />
            <Input placeholder="Email" name="user_email" />
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
            />
            <Button type="submit">Send</Button>
            {success && "Message sent successful, we will get back to you soon"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
