import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";
import styled from "styled-components";
const Desc = styled.div`
  width: 300px;
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
    top: -150px;
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

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Shoe color="red" />
        </Suspense>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.6} />
        <directionalLight args={[1, 2]} />
      </Canvas>
      <Desc>
        <Text>
          We design an outstanding products you would be proud to associate
          with.
        </Text>
      </Desc>
    </>
  );
};

export default ProductDesign;
