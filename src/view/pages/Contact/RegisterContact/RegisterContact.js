import React, { useState } from 'react';
import './style.css';
import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css';
import api from '../../../../services/api';

function RegisterContact() {
    const [ name, setName ] = useState('')
    const [ secondName, setSecondName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone] = useState('')

    function handleSubmit (e){
        const data = {
            name,
            secondName,
            email,
            phone
        }

        console.log(data)
    }

    return (
        <div> 
            <div>
                <Background className="background" />
                <Nav />
            </div>  

            <form method='POST'>
                <h2>Crie seu contato</h2>
                <div className='section'>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite um Nome"
                        className="input re"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='section'>
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        placeholder="Digite um Sobrenome"
                        className="input re"
                        value={secondName}
                        onChange={e => setSecondName(e.target.value)}

                    />
                </div>
                <div className='section'>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Digite um Email"
                        className="input re"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                </div>
                <div className='section'>
                    <label>Telefone</label>
                    <input
                        type="text"
                        placeholder="Digite um Telefone"
                        className="input re"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}

                    />
                </div>
                <button onSubmit={handleSubmit}>CRIAR CONTA</button>
            </form>
        </div>
    )
}

export default RegisterContact;