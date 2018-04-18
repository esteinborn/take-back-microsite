import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { fontStyles, hover, lightLightGray, media } from "../styleGuide";
import heroImage from "../assets/hero-image.png";

const links = [
  ["Find a Location", "map"],
  ["Get a Reminder", "text"],
  ["FAQ", "faq"],
  // ['Toolkit', 'toolkit'],
  ["About the Opioid Crisis", "about"],
  ["An Initiative of NY AG Schneiderman", "nyag"],
];

const Nav = () => (
  <Container id="nav">
    <NavLink
      name="top"
      title={<LogoLink />}
      key="top"
      style={{ padding: 0, margin: "0 5px" }}
    />
    {links.map(([title, name]) => (
      <NavLink name={name} title={title} key={name} />
    ))}
  </Container>
);

const LogoLink = () => <img src={heroImage} width="115px" />;

export const SectionLink = ({ name, title, ...props }) => (
  <Link
    to={name}
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={-60}
    duration={500}
    isDynamic={true}
    key={name}
    {...props}
  >
    {title}
  </Link>
);

const NavLink = styled(SectionLink)`
  ${fontStyles} font-weight: 500;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
  ${hover`
    background-color: ${lightLightGray};
  `} ${media.desktop`
    padding: 15px;
    font-size: 18px;
  `};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${lightLightGray};
  position: fixed;
  background-color: white;
  width: 100%;
  top: 0;
  z-index: 10;
  height: 60px;
`;

export default Nav;
