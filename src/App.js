import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/Homepage/homepage";
import Login from "./pages/LogIn/login";
import NewArticle from "./pages/NewArticle/newArticle";
import Post from "./pages/Readmore/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextGlobal } from "./Estados/Contexto";
import EditArticle from "./pages/EditArticle/EditArticle";
import Directorio from "./pages/Directorio/directorio";
function App() {
  const [login] = useContext(ContextGlobal);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/XchelAdministrador"
          element={login ? <HomePage /> : <Login />}
        />
        <Route
          path="/newArticle"
          element={login ? <NewArticle /> : <HomePage />}
        />

        <Route
          path="/editArticle/:id"
          element={login ? <EditArticle /> : <HomePage />}
        />

        <Route path="/posts" element={<HomePage />} />

        <Route path="/post/:id" element={<Post />} />
        
        <Route path="/directorio" element={<Directorio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
