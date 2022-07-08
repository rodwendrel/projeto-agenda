import Baloon from '../../assets/SVG/Baloon';
import Baloonbg from '../../assets/SVG/Baloonbg';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import '../LoginPage/style.css';

function Login() {
    return (

        <div className="Login">
            
            <div className="left-content">
                <Baloon className="baloon" />
                <Baloonbg className="baloonbg" />
                <h1>Agenda.</h1>
                <p>Todos os seus contatos em um só lugar!</p>
                <Link to="/register">REGISTRE-SE AGORA</ Link>
            </div>

            <div className="right-content">

                <LoginForm />

            </div>

        </div>

    )
}

export default Login;