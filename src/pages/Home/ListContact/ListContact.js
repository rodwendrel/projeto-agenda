import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css'; 
import {FaTrashAlt} from 'react-icons/fa';
import {BsPen} from 'react-icons/bs';

function RegisterContact() {
    return (
        <div> 
          <div>
            <Background className="background" />
            <Nav />
          </div>
     
          <div className="table">
            <table className="table-section">
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>  
                    <th></th> 
                    <th></th>                 
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>   
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1F62C6"
                                Background="#fff"
                            />
                        </button>
                    </td>               
                    <td>
                        <button className="edit-button">
                            <BsPen
                                size={18}
                                color="#1B7CD6"
                                background="fff"                                                          
                            />
                        </button>
                    </td>    
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>  
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1B7CD6"
                                Background="#fff"
                            />
                        </button>
                    </td>       
                    <td>
                        <button className="edit-button">
                            <BsPen
                                size={18}
                                color="#1B7CD6"
                                background="fff"                                                          
                            />
                        </button>
                    </td>                         
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1B7CD6"
                                Background="#fff"
                            />
                        </button>
                    </td>                  
                    <td>
                        <button className="edit-button">
                            <BsPen
                                size={18}
                                color="#1B7CD6"
                                background="fff"                                                          
                            />
                        </button>
                    </td>                    
                </tr>
            </table>
          </div>

        </div>
    )
}

export default RegisterContact;