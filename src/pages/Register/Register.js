import Logo from "../../assets/SVG/Logo";
import Background from "../../assets/SVG/Background";
import './style.css'; 
import { Link } from 'react-router-dom';
 
function Register() {
    return (

        <div className="Register">

            <Background className="background" />

            <span className="logo"><Logo /></span>


            <form className="form register">
                <h2>Crie sua conta</h2>

                <label className="label">Usuário</label>
                <input
                    type="text"
                    placeholder="digite um nome usuário"
                    className="input re"
                />

                <label className="label">Email</label>
                <input
                    type="text"
                    placeholder="digite um endereço de email"
                    className="input re"
                />

                <label className="label">Senha</label>
                <input
                    type="password"
                    placeholder="digite uma senha"
                    className="input re"
                />

                <button className='input login'>CRIAR CONTA</button>

                <p className='text'>JÁ POSSUI UMA CONTA? ENTRE <Link to="/">AQUI</Link></p>
            </form>
        </div>

    );
}

export default Register;