import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const Logo = styled(Link)`
  color: black;
  line-height: 8vh; 
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo to={"/"}>Drobune Weblog</Logo>
      <Toggle
        //navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavItem to="https://drobune.nl">Profile</NavItem>
          <NavItem to="/404">Gallery</NavItem>
          <NavItem to="https://drobune.nl">Contact</NavItem>
        </Navbox>
      ) : (
        <Navbox open>
          <NavItem to="https://drobune.nl">Profile</NavItem>
          <NavItem to="/404">Gallery</NavItem>
          <NavItem to="https://drobune.nl">Contact</NavItem>
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

const NavItem = styled(Link)`
  text-decoration: none;
  color: red;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: black;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div<{open?: boolean}>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${({open}) => (open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div<{open?: boolean}>`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${({open}) => (open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${({open}) => (
      open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
    top: -10px;
  }

  ::after {
    opacity: ${({open}) => (open ? "0" : "1")};
    transform: ${({open}) => (open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`