import styled, { keyframes } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { Suspense } from "react";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;

  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 786px) {
    justify-content: center;
    align-items: center;
    padding-inline: 15px;

    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 786px) {
    width: 100%;
    align-items: center;
    padding-inline: 15px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 786px) {
    font-size: 64px;
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 786px) {
    text-align: center;
  }
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 786px) {
    text-align: center;
    font-size: 24px;
  }
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 50;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 786px) {
    width: 150px;
    text-align: center;
  }
`;

const Who = () => {
  const angleToRadians = (angle: number) => (Math.PI / 18) * angle;
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Suspense
              fallback={
                <Html>
                  <p>...loading</p>
                </Html>
              }
            >
              <Cube />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight args={["#fff", 1]} />
            <directionalLight position={[3, 2, 1]} />
          </Canvas>
        </Left>
        <Right>
          <Title>Think out the square box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubTitle>Who we are</SubTitle>
          </WhatWeDo>
          <Desc>a creative group of developers with passion for the arts</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
