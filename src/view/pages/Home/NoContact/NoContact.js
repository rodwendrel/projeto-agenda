import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css'; 
import {Link} from 'react-router-dom';

function RegisterContact() {
    return (
        <div> 
            <div>
                <Background className="background" />
                <Nav />               
            </div>
            
            <div>
                <h1 className="no-contact">Parece que você não possui nenhum contato :(</h1>
                <p className="connect">Se conecte com seus amigos agora mesmo!</p>        
            </div>

            <div className="button-section" >
                <Link className="btn" to="/contacts/register">ADICIONAR CONTATOS</Link>            
                
            </div>
        </div>   
    )
}

export default RegisterContact;