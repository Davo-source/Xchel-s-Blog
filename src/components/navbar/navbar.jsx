import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../../Estados/Contexto";
import "./navbar.styles.css";

const NavBar = () => {
  const [login, setlogin] = useContext(ContextGlobal);
  let classHide = login ? "navbar" : "hide";
  const handleClick = () => {
    setlogin(false);
  };
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="link" to="/xcheldev">
              <i className="fab fa-mixer fa-lg"></i>
              chel dev
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav navbarScroll>
              <Nav.Link as={Link} to="/xcheldev/posts">
                Posts
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`myButton-${classHide}`}
                to="/xcheldev/newArticle"
              >
                Make a Post
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`btn-${classHide}`}
                to="/xcheldev"
                onClick={handleClick}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
