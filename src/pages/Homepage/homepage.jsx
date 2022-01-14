import { useNavigate } from 'react-router-dom';
import { Articles } from '../../components/articles/articles.component';
import './homepage.styles.css'

const HomePage = () => {
    let navigate = useNavigate();
    return(
    <div className="Header">
        <h1 className="title" >Blog del Xchel</h1>
        <button className="myButton" onClick={()=>(navigate('/newArticle'))}>
                New Article</button>
        <div>
            <Articles/>
        </div>
    </div>
    )}

export default HomePage;