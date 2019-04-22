import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Sitemetadata from "../components/sitemetadata";

const NavigationBar = () => (
  <div>
    <Sitemetadata />
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">ZAIRZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/team">MEET THE TEAM</Nav.Link>
          <Nav.Link href="/about">SESSIONS</Nav.Link>
          <Nav.Link href="/alumni">ALUMNI</Nav.Link>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
          <Nav.Link href="/faqs">FAQs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavigationBar;
