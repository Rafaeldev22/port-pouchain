import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return(
        <header>
            <nav>
                <img src="https://pouchain.com.br/wp-content/uploads/2021/12/LOGO-branco-png.png" alt="logo" />
                <ul>
                    <Link to="/" className="tag-link"><li>Home</li></Link>
                    <Link className="tag-link"><li>Fale com uma vendedora</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;

