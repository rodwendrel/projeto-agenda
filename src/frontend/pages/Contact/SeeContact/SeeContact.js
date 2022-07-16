import React, { useState } from 'react'
import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css'; 

function RegisterContact({data}) {
    /* const [ changedContact, setchangedContact ] = useState('')

    async function handleSave(e, contacts) {
        if(changedContact && changedContact !== contacts){
            await api.contact(`/contents/${data._id}`, {
                contact: changedContact,
            })
        }
    }*/

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

                    {/* cada text sera substituido com o valor recebido da variavel do contato clicado*/}
                    <text
                        className="form-response"
                        /* onChange={ e => setchangedContact(e.target.value)}
                        onBlur={e => handleSave(e.target, data.contacts)} */
                    >
                    </text>
                </div>
                <div className='section'>
                    <label>Sobrenome</label>
                    <text className="form-response">Sobrenome</text>
                </div>
                <div className='section'>
                    <label>Email</label>
                    <text className="form-response">Email</text>
                </div>
                <div className='section'>
                    <label>Telefone</label>
                    <text className="form-response">Telefone</text>
                </div>
                <button>CRIAR CONTA</button>
            </form>
        </div>
    )
}

export default RegisterContact;