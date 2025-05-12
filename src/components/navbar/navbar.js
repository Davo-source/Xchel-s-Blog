import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ContextGlobal} from "../../Estados/Contexto";
import "./navbar.styles.css";

const NavBar = () => {
  const { loginState, setLoginState } = useContext(ContextGlobal);
  let classHide = loginState ? "navbar" : "hide";
  const handleClick = () => {
    setLoginState(false);
  };
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="link" to={`/`}>
              <img src="/favicon.ico" alt="Favicon" style={{ width: '40px', height: '40px' }}/>
              <span className="title-logo">chel dev</span>
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
