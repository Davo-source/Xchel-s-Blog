import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import NewArticle from "./pages/new article/newArticle";
import Post from "./pages/read more/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextGlobal } from "./Estados/Contexto";
import EditArticle from "./pages/edit article/EditArticle";
import Footer from "./components/footer/footer";
import ErrorPage from "./pages/error page/error-page";

function App() {
  const [login] = useContext(ContextGlobal);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route
          path={`/xcheladmin`}
          element={login ? <HomePage /> : <Login />}
        />
        <Route
          path={`/newArticle`}
          element={login ? <NewArticle /> : <HomePage />}
        />

        <Route
          path={`/editArticle/:id`}
          element={login ? <EditArticle /> : <HomePage />}
        />

        <Route path={`/posts`} element={<HomePage />} />

        <Route path={`/post/:id`} element={<Post />} />

          <Route path={`/errorPage`} element={<ErrorPage />} />

        <Route path="*" element={<Navigate to="/errorPage" replace />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
