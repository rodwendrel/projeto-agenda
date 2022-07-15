import Baloon from '../../assets/SVG/Baloon';
import Baloonbg from '../../assets/SVG/Baloonbg';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
    return (

        <div className="Login">
            <div className="left-content">
                <Baloon className="baloon" />
                <h1>Agenda.</h1>
                <p>Todos os seus contatos em um só lugar!</p>
                <Link to="/register">REGISTRE-SE AGORA</ Link>
            </div>

            <div className="right-content">
                <div>
                    <form className='login-form'>
                        <h2>Entre com a sua conta</h2>

                        <input 
                            placeholder="Usuário"
                            type="text"
                            className="input user"
                        />
                        <input 
                            placeholder="Senha"
                            type="password"
                            className="input password"
                        />
                        <button>Entrar</button>
                    </form>
                </div>
                <Baloonbg className="baloonbg" />
            </div>
        </div>
    )
}

export default Login;