import React from "react";
import { Hero, Who, Works, Contact, Footer } from "./components";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Footer/>
    </Container>
  );
};

export default App;
