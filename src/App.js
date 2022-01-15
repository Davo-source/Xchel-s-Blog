
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/homepage';
import Login from './pages/LogIn/login';
import NewArticle from "./pages/NewArticle/newArticle";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< HomePage />}/>
        <Route path='/homepage' element={<Navigate to='/'/>}/>
        <Route path='/XchelAdministrador' element={<Login/>}/>
        <Route path='/newArticle' element={<NewArticle/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
