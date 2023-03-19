import React, {useContext} from "react";
import {ContextGlobal} from "../../Estados/Contexto";
import "./navbar.styles.css";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {AppBar, Avatar, Container, Menu, Toolbar, Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavBar = () => {
  const [login, setlogin] = useContext(ContextGlobal);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let classHide = login ? "navbar" : "hide";

  const pages = ['Posts', 'Make a Post'];
  const settings = ['Cerrar sesión'];

  const handleClick = () => {
    setlogin(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    console.log(e);
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        mainGradient: "linear-gradient(to right, #0396FF , #ABDCFF)"
      },
    },
  });
  return (
      // <Navbar className="navbar" expand="lg">
      //   <Container>
      //     <Navbar.Brand>
      //       <Link className="link" to={`/`}>
      //         <i className="fab fa-mixer fa-lg"/>
      //         chel dev
      //       </Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="navbarScroll" />
      //     <Navbar.Collapse id="navbarScroll">
      //       <Nav navbarScroll>
      //         <Nav.Link as={Link} to={`/posts`}>
      //           Posts
      //         </Nav.Link>
      //         <Nav.Link
      //           as={Link}
      //           className={`myButton-${classHide}`}
      //           to={`/newArticle`}
      //         >
      //           Make a Post
      //         </Nav.Link>
      //         <Nav.Link
      //           as={Link}
      //           className={`btn-${classHide}`}
      //           to={`/`}
      //           onClick={handleClick}
      //         >
      //           Logout
      //         </Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
<ThemeProvider theme={theme}>
  <AppBar position="static" style={{background: theme.palette.primary.mainGradient}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
        >
          <span><ArrowForwardIosIcon/><ArrowBackIosIcon/></span> chel Dev
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
          >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
        >
          <span><ArrowForwardIosIcon/><ArrowBackIosIcon/></span> chel Dev
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
              <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Abrir preferencias">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Xchel dev" src=" " />
            </IconButton>
          </Tooltip>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
</ThemeProvider>
  );
};

export default NavBar;
