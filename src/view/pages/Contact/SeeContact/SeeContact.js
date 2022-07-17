import React, { useState } from "react";
import Background from "../../../assets/SVG/Background";
import Nav from "../../../components/Nav/Nav";
import "./style.css";
import api from "../../../../services/api";

function RegisterContact() {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const SeeContactURL = "http://localhost:3030/contacts";

  /*const handleSubmit= (e) => {
        e.preventDefault();
        
        api.get(SeeContactURL).then(resp => {
            console.log(resp.data);
            console.log(resp.name);
        }).catch((error) => {
            console.error(error.toJSON());
        })
    }*/

  /*async function handleSave(e, contacts) {
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
        <div className="section">
          <label>Nome</label>
          <text
            className="form-response"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            //onBlur={e => handleSave(e.target, data.contacts)}
          ></text>
        </div>
        <div className="section">
          <label>Sobrenome</label>
          <text
            className="form-response"
            required
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          ></text>
        </div>
        <div className="section">
          <label>Email</label>
          <text
            className="form-response"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></text>
        </div>
        <div className="section">
          <label>Telefone</label>
          <text
            className="form-response"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></text>
        </div>
        <button /*onClick={handleSubmit}*/>CRIAR CONTA</button>
      </form>
    </div>
  );
}

export default RegisterContact;
