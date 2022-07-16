import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css'; 
import {FaTrashAlt} from 'react-icons/fa';
import {BsPen} from 'react-icons/bs';
import {IoIosAddCircle} from 'react-icons/io';
import {Link} from 'react-router-dom';

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
                    <th>
                        <button className="add-button">
                            <IoIosAddCircle
                                size={18}
                                color="#1B7CD6"
                                background="fff"
                            />
                        </button>
                    
                    </th>                 
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>   
                    <td>
                        <button className="edit-button">
                            <Link to="/contact/register">
                                <BsPen
                                    size={18}
                                    color="#1B7CD6"
                                    background="fff"                                                          
                                />
                            </Link>
                        </button>                        
                    </td>               
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1F62C6"
                                Background="#fff"
                            />
                        </button>                        
                    </td>    
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>  
                    <td>
                        <button className="edit-button">
                            <Link to="/contact/register">
                                <BsPen
                                    size={18}
                                    color="#1B7CD6"
                                    background="fff"                                                          
                                />
                            </Link>
                        </button>   
                    </td>       
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1F62C6"
                                Background="#fff"
                            />
                        </button> 
                    </td>                         
                </tr>

                <tr>
                    <td>Joãozinho da Silva</td>
                    <td>+99 (99) 99999-9999</td>
                    <td>
                        <button className="edit-button">
                            <Link to="/contact/register">
                                <BsPen
                                    size={18}
                                    color="#1B7CD6"
                                    background="fff"                                                          
                                />
                            </Link>
                        </button>   
                    </td>                  
                    <td>
                        <button className="delete-button">
                            <FaTrashAlt
                                size={18}
                                color="#1F62C6"
                                Background="#fff"
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