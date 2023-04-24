import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div`
  width: 250px;
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

const Development = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Mac />
        </Suspense>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight args={[1, 2]} />
      </Canvas>
      <Desc>
        <Text>We design beautify products that stands the test of time</Text>
      </Desc>
    </>
  );
};

export default Development;
