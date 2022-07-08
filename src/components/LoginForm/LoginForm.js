import './style.css';

function LoginForm() {
    return(
        <div className="LoginForm">
            <form className="log-in form">
                <h2>Entre com sua conta</h2>

                <input 
                    placeholder="usuário"
                    type="text"
                    className="input user"
                />
                <input 
                    placeholder="senha"
                    type="password"
                    className="input password"
                />
                <button className='input login'>Entrar</button>

            </form>

        </div>
    );
}
export default LoginForm;