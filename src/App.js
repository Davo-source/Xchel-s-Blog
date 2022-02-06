import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import HomePage from "./pages/Homepage/homepage";
import Login from "./pages/LogIn/login";
import NewArticle from "./pages/NewArticle/newArticle";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/XchelAdministrador" element={<Login />} />
        <Route path="/newArticle" element={<NewArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
