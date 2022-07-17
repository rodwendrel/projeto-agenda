import { Routes, Route } from 'react-router-dom';
import Login from "./view/pages/Login/Login";
import Register from './view/pages/Register/Register';
import RegisterContact from './view/pages/Contact/RegisterContact/RegisterContact.js';
import NoContact from './view/pages/Home/NoContact/NoContact';
import ListContact from './view/pages/Home/ListContact/ListContact';
import SeeContact from './view/pages/Contact/SeeContact/SeeContact';
import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts/register" element={<RegisterContact />} />
        
        {/*
        Imaginei dessas duas telas serem a home, apos ser feito o login a rota "/" viraria uma dessas duas.
        1. Caso a pessoa logada nao tenha contatos: NoContact
        2. Caso tenha: ListContact
        */}
        <Route path="/contacts/" element={<NoContact />} />
        <Route path="/contacts/listcontact" element={<ListContact />} />

        {/* :contactId seria substituida pela id do contato que se deseja abrir */}
        <Route path="/contacts/:id" element={<SeeContact />} />
      </Routes>
    </div>
  );
}

export default App;