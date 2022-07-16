import Logo from "../../assets/SVG/Logo";
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    return (
        <nav>
            <Logo />
            <div className="nav-options">
                <span><Link className="options" to="/contact">Contato</Link></span>
                <span><Link className="options" to="/">Sair</Link></span>
            </div>
        </nav>
    );
}

export default Nav;