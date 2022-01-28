import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar" bg="white" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="link" to="/">
              <i className="fab fa-mixer fa-lg"></i>
<<<<<<< HEAD
              chel dev
=======
              Xchel's Blog
>>>>>>> 0c6d5f8c97af91ed5fed6e5ac63a1c1b93cd3a7e
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls ="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav navbarScroll>
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} className="myButton" to="/newArticle">
                Make a Post
              </Nav.Link>
            </Nav>

            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search post"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
