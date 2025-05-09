import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ContextGlobal} from "../../Estados/Contexto";
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
            <Link className="link" to={`/`}>
              <i className="fab fa-mixer fa-lg"/>
              chel dev
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav navbarScroll>
              <div className="test1">
              <Nav.Link
                as={Link}
                className={`btn-${classHide}`}
                to={`/newArticle`}
                role="button"
              >
                New Post
              </Nav.Link>
              </div>
              <Nav.Link
                as={Link}
                className={`btn-${classHide}`}
                to={`/`}
                onClick={handleClick}
              >
                Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
