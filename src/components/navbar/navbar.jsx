import React, { useContext } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../Estados/Contexto";
import Directorio from "../../pages/Directorio/directorio";
import "./navbar.styles.css";


const NavBar = () => {
  const [login, setlogin] = useContext(ContextGlobal);
  let classHide = login ? "navbar" : "hide";
  const handleClick = () =>{
    setlogin(false);
  }

let navigate = useNavigate();

const handleSumbit = (event)=>{
  event.preventDefault();
  navigate("/directorio");
}

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="link" to="/">
              <i className="fab fa-mixer fa-lg"></i>
              chel dev
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav navbarScroll>
              <Nav.Link as={Link} to="/posts" >
                Posts
              </Nav.Link>
              <Nav.Link as={Link} className={`myButton-${classHide}`} to="/newArticle">
                Make a Post
              </Nav.Link>
              <Nav.Link as={Link} className={`btn-${classHide}`} to="/" onClick={handleClick}>
                Logout
              </Nav.Link>
            </Nav>

            <Form className="d-flex ms-auto" onSubmit={handleSumbit}>
              <FormControl
                type="search"
                placeholder="Search post"
                className="me-2"
                aria-label="Search"
                required
              />
              <Button className="searchIcon" type="submit" >
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
              </Button>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
