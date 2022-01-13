import { Articles } from '../components/articles.component';
import './homepage.styles.css'

const HomePage = () => {
    return(
    <div className="Header">
        <h1 className="title" >Blog del Xchel</h1>
        <button className="myButton" >New Article</button>
        <div>
            <Articles/>
        </div>
    </div>
    )}

export default HomePage;