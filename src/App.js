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
import {PATH} from "./utils/pathURL";

function App() {
  const [login] = useContext(ContextGlobal);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path={`/${PATH.URL}`} element={<HomePage />} />
        <Route
          path={`/${PATH.URL}/xcheladmin`}
          element={login ? <HomePage /> : <Login />}
        />
        <Route
          path={`/${PATH.URL}/newArticle`}
          element={login ? <NewArticle /> : <HomePage />}
        />

        <Route
          path={`/${PATH.URL}/editArticle/:id`}
          element={login ? <EditArticle /> : <HomePage />}
        />

        <Route path={`/${PATH.URL}/posts`} element={<HomePage />} />

        <Route path={`/${PATH.URL}/post/:id`} element={<Post />} />

        <Route path="*" element={<Navigate to={`/${PATH.URL}`} replace />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
