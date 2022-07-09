import './style.css';

function LoginForm() {
    return(
        <div className="LoginForm">
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
    );
}
export default LoginForm;