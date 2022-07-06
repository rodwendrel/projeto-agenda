import './style.css';

function LoginForm() {
    return(
        <div className="LoginForm">
            <form className="login-form">
                <h2>Entre com sua conta</h2>

                <input 
                    placeholder="usuário"
                    type="text"
                    className="input user"
                />

                <input 
                    placeholder="senha"
                    type="text"
                    className="input password"
                />

                <button className='login input'>Entrar</button>
              
            </form>

        </div>
    )
}

export default LoginForm;