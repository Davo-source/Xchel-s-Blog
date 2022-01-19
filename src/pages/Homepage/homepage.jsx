import { useNavigate } from "react-router-dom";
import { Articles } from "../../components/articles/articles.component";
import "./homepage.styles.css";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="Header">
      <div>
        <Articles />
      </div>
    </div>
  );
};

export default HomePage;
