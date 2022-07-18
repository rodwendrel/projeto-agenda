import Background from '../../../../src/view/assets/SVG/Background';
import Nav from '../../../../src/view/components/Nav/Nav';
import { FaTrashAlt } from 'react-icons/fa';
import { BsPen } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css'

function Table() {

    const [listContact, setListContact] = useState([]);

    useEffect(() => {
        const listRes =
            axios.get('http://localhost:3030/contacts')
                .then(res => {
                    setListContact(res.data)
                })
    }, [setListContact])


    const deleteContact = (e, id) => {
     //   e.preventDefault()

        axios.delete(`http://localhost:3030/contacts/${id}`)
            .then(res => {
                window.alert('Muito pica');
                window.location.href = "/contacts/listcontact"
            });
    };

    return (
        <div>
            <div>
                <Background className="background" />
                <Nav />
            </div>

            <div className="table">
                <table className="table-section">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>
                                <button className="add-button" onClick={e => window.location.href = "/contacts/register"}>
                                    <IoIosAddCircle
                                        size={50}
                                        color="#1B7CD6"
                                        background="fff"
                                    />
                                </button>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {listContact.map((contact, key) => <tr key={key}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>

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
                                <button className="delete-button" onClick={e => deleteContact(e.target, contact.id)}>
                                    <FaTrashAlt
                                        size={18}
                                        color="#1F62C6"
                                        Background="#fff"

                                    />
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Table;