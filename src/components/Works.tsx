import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import ProductDesign from "./ProductDesign";
import Development from "./Development";

const data: string[] = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 786px) {
    width: 100%;
    padding-inline: 15px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media screen and (max-width: 786px) {
    font-size: 50px;
    text-align: center;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props: any) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 1s linear both;
      color: hotpink;

      @media screen and (max-width: 786px) {
        animation: none;
      }
    }
  }

  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;
const Right = styled.div`
  position: relative;
  flex: 1;
  @media screen and (max-width: 786px) {
    width: 100%;
    padding-inline: 15px;

  }
`;

const Works = () => {
  const [selectedItem, setSelectedItem] = useState<string>(data[0]);
  const getCategories = () => {
    switch (selectedItem) {
      case "Web Design":
        return <WebDesign />;
      case "Product Design":
        return <ProductDesign />;
      case "Development":
        return <Development />;
      default:
        break;
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{getCategories()}</Right>
      </Container>
    </Section>
  );
};

export default Works;
