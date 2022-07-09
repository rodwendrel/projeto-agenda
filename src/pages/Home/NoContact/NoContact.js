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
            
            <div>
                <h1 className="no-contact">Parece que você não possui nenhum contato :(</h1>
                <p className="connect">Se conecte com seus amigos agora mesmo!</p>        
            </div>

            <div className="button-section" >
                <button className="btn">ADICIONAR CONTATOS</button>
                
            </div>
        </div>   
      
    )
}

export default RegisterContact;