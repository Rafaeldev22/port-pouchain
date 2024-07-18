import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <img
        src="https://pouchain.com.br/wp-content/uploads/2021/12/LOGO-branco-png.png"
        alt=""
      />
      <div className="links">
        <Link to="/papeis">
          <button>Papeis</button>
        </Link>
        <Link to="/alcas">
          <button>Alças</button>
        </Link>
        <Link to="/acabamento">
          <button>Acabamentos</button>
        </Link>
      </div>
    </div>
  );
}
