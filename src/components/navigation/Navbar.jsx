import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

//Styled components
import {
  Nav,
  NavList,
  ListItem,
  NavLink,
  Hamburger,
  Bar,
  NavButton,
} from "./navbar-styles";

const Navbar = () => {
  const links = ["Pricing", "Product", "About Us", "Careers", "Community"];

  const [isHamActive, setHamActive] = useState(false);
  const [isNavActive, setNavActive] = useState(false);

  const toggleHamActive = () => {
    setHamActive(!isHamActive);
    setNavActive(!isNavActive);
  };
  return (
    <Nav className="container mx-auto">
      <img src={logo} alt="manage logo" />
      {/* <div>
        <FaHamburger size={40} cursor={"pointer"} />
      </div> */}
      <NavList className={`${isNavActive ? "active" : ""}`}>
        {links.map((link) => (
          <ListItem key={link}>
            <NavLink href={"#" + link}>{link}</NavLink>
          </ListItem>
        ))}
      </NavList>
      <NavButton>Get Started</NavButton>
      <Hamburger
        className={`${isHamActive ? "active" : ""}`}
        onClick={toggleHamActive}
      >
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
      </Hamburger>
    </Nav>
  );
};

export default Navbar;
