import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Street from "./Street";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 75px;
  background-color: white;
  padding: 20px 10px;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 20px;
  text-align: center;
  &:hover {
    background-color: hotpink;
  }
  @media screen and (max-width: 786px) {
    bottom: 100px;
    right: 0;
    left: 0;
    margin: auto;
  }
`;
const Text = styled.p`
  color: #545252;
  &:hover {
    color: white;
  }
`;
const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Street />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.6} />
          <directionalLight args={[1, 2]} />
        </Suspense>
      </Canvas>
      <Desc>
        <Text>We design an amazing web with modern UI/UX</Text>
      </Desc>
    </>
  );
};

export default WebDesign;
