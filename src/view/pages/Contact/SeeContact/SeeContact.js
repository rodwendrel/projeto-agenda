import React, { useState } from 'react'
import Background from '../../../assets/SVG/Background';
import Nav from '../../../components/Nav/Nav';
import './style.css';
import axios from 'axios';

function RegisterContact({ data }) {

    async function listContact() {
        let data = [];

        axios.get('http://localhost:3030/contacts')
            .then(res => console.log(res))

        console.log(data);
    };

    listContact()

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
                    <input type='text'
                        className="form-response"
                    />
                    
                </div>
                <div className='section'>
                    <label>Sobrenome</label>
                    <input type='text' className="form-response" />
                </div>
                <div className='section'>
                    <label>Email</label>
                    <input type='text' className="form-response" />
                </div>
                <div className='section'>
                    <label>Telefone</label>
                    <input type='text' className="form-response" />
                </div>
                <button>CRIAR CONTA</button>
            </form>
        </div>
    )
}

export default RegisterContact;