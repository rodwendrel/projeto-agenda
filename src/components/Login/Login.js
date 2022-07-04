import LoginForm from './LoginForm';
import './style.css';

function Login() {
    return(
        <div className="Login">
            
            <div className="left-content">
                <h1>Agenda.</h1>
                <p>Todos os seus contatos em um só lugar!</p>
                <a href='#'>REGISTRE-SE AGORA</a>
            </div>

            <div className="right-content">

                <LoginForm />

            </div>

        </div>
    )
}

export default Login;