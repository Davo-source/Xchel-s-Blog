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

function App() {
  const [login] = useContext(ContextGlobal);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/xcheldev" element={<HomePage />} />
        <Route
          path="/xcheldev/XchelAdministrador"
          element={login ? <HomePage /> : <Login />}
        />
        <Route
          path="/xcheldev/newArticle"
          element={login ? <NewArticle /> : <HomePage />}
        />

        <Route
          path="/xcheldev/editArticle/:id"
          element={login ? <EditArticle /> : <HomePage />}
        />

        <Route path="/xcheldev/posts" element={<HomePage />} />

        <Route path="/xcheldev/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
