import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  padding-left: 5%;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  /* background-color: blue; */
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* background-color: yellow; */
`;

export const NavbarLinkContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 30px;

`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Roboto;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  /* background-color: yellow; */
  font-size: x-large;
  font-family: Roboto;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const Title = styled.h1`
  color: white;
  font-size: x-large;
  font-family: Roboto;
  text-decoration: none;
`;


export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;