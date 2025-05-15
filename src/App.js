import axios from "axios";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import NewArticle from "./pages/new article/newArticle";
import Post from "./pages/read more/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import {ContextGlobal} from "./Estados/Contexto";
import EditArticle from "./pages/edit article/EditArticle";
import ErrorPage from "./pages/error page/error-page";
import {Layout} from "./components/layout/layout";

function App() {
  const { loginState, setLoginState, setAccessToken } = useContext(ContextGlobal);

  //TODO: A GET REQUEST TO CHECK AND VERIFY IF REFRESH TOKEN HASN'T EXPIRED, IF IT HASN'T THEN REFRESH ACCESS TOKEN
  useEffect(() => {
   const setAccessAndLoginStateFromCookie = async () => {
     try{
      const resp = await axios.post('/auth/refresh', {});
      setAccessToken(resp.data);
      setLoginState(true);
     } catch(err){
      console.log(err)
     }
   };
   setAccessAndLoginStateFromCookie();
  }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route
                path={`/xcheladmin`}
                element={loginState ? <Navigate to="/" replace /> : <Login />}
            />
            <Route path="/errorPage" element={<ErrorPage/>} />
            <Route path="*" element={<Navigate to="/errorPage" replace />} />
            <Route path={`/`} element={<Layout/>}>
                <Route index element={<HomePage />} />
                <Route
                    path={`newArticle`}
                    element={loginState ? <NewArticle /> : <HomePage />}
                />
                <Route
                    path={`editArticle/:id`}
                    element={loginState ? <EditArticle /> : <HomePage />}
                />
                <Route path={`posts`} element={<HomePage />} />
                <Route path={`post/:id`} element={<Post />} />
            </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
