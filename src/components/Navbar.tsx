import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

const Container = styled.nav`
  width: 1200px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  @media screen and (max-width: 786px) {
    width: 100%;
    padding-inline: 15px;
  }
`;
const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const LogoTitle = styled.p`
  color: #da4ea2;
  font-size: 24px;
  text-transform: capitalize;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
  cursor: pointer;

  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const ListItem = styled.li`
  font-size: 18px;
  color: lightgray;

  &:hover {
    color: white;
  }
`;
const Button = styled.button`
  width: 100px;
  background-color: #da4ea2;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <LogoWrapper>
            <Logo src="./img/tm.png" />
            <LogoTitle>Techmela Services</LogoTitle>
          </LogoWrapper>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
