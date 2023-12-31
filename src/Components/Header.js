import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import HeaderTitle from "./HeaderTitle";

const Header = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="border-bottom">
        <Container fluid>
          <Nav className="m-auto fs-6">
            <Nav.Link href="#home" className="me-5 text-white">
              HOME
            </Nav.Link>
            <Nav.Link href="#store" className="text-white">
              STORE
            </Nav.Link>
            <Nav.Link href="#about" className="ms-5 text-white">
              ABOUT
            </Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShow} />
        </Container>
      </Navbar>

      <HeaderTitle />
    </React.Fragment>
  );
};

export default Header;
