import Logo from "../../assets/SVG/Logo";
import Background from "../../assets/SVG/Background";
import './style.css'; 
import { Link } from 'react-router-dom';
 
function Register() {
    return (
        <div className="Register">
            <Background className="background" />
            <div className="logo"><Logo /></div>
            
            <form>
                <h2>Crie sua conta</h2>
                
                <div className="section">
                    <label>Usuário</label>
                    <input
                        type="text"
                        placeholder="Digite um nome Usuário"
                        className="input re"
                    />
                </div>
                
                <div className="section">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Digite um endereço de Email"
                        className="input re"
                    />
                </div>
                <div className="section">
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite uma Senha"
                        className="input re"
                    />
                </div>
                <div className="button-section">
                    <button>CRIAR CONTA</button>
                    <p className='text'>JÁ POSSUI UMA CONTA? ENTRE <Link to="/">AQUI</Link></p>
                </div>
            </form>
        </div>

    );
}

export default Register;