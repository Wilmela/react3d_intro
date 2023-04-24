import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 30px;
  @media screen and (max-width: 786px) {
    width: 100%;
    padding-inline: 15px;
  }
`;
const Text = styled.p`
  color: lightgray;
`;
const Footer = () => {
  return (
    <Section>
      <Container>
        <Text>Made with ❤️ by Mela</Text>
      </Container>
    </Section>
  );
};

export default Footer;
