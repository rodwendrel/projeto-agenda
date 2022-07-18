import Baloon from '../../assets/SVG/Baloon';
import Baloonbg from '../../assets/SVG/Baloonbg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './style.css';


function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3030/register/auth', {
                user: user,
                password: password
            })
            .then(() => {
                alert("Login feito com sucesso!");
                window.location.href = "/contacts/";
            })
            .catch((error) => {
                alert("Falha ao fazer login");
                console.error(error.toJSON());
            });
    };


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
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            placeholder="Senha"
                            type="password"
                            className="input password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Entrar</button>
                    </form>
                </div>
                <Baloonbg className="baloonbg" />
            </div>
        </div>
    )
}

export default Login;