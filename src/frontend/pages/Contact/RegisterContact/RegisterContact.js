import '../RegisterContact/style.css';
import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css'; 

function RegisterContact() {
    return (
        <div> 
            <div>
                <Background className="background" />
                <Nav />
            </div>  

            <form>
                <h2>Crie seu contato</h2>
                <div className='section'>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite um Nome"
                        className="input re"
                    />
                </div>
                <div className='section'>
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        placeholder="Digite um Sobrenome"
                        className="input re"
                    />
                </div>
                <div className='section'>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Digite um Email"
                        className="input re"
                    />
                </div>
                <div className='section'>
                    <label>Telefone</label>
                    <input
                        type="text"
                        placeholder="Digite um Telefone"
                        className="input re"
                    />
                </div>
                <button>CRIAR CONTA</button>
            </form>
        </div>
    )
}

export default RegisterContact;