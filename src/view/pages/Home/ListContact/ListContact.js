import React, { useState, useEffect } from "react";
import Background from "../../../assets/SVG/Background";
import Nav from "../../../components/Nav/Nav";
import "./style.css";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../../../services/api";

import TableRowName from "../../../components/TableRow/TableRowName";
import TableRowPhone from "../../../components/TableRow/TableRowPhone";
import TableRowEdit from "../../../components/TableRow/TableRowEdit";
import TableRowDelete from "../../../components/TableRow/TableRowDelete";

import { FaTrashAlt } from "react-icons/fa";
import { BsPen } from "react-icons/bs";

function ListContact() {
  const SeeContactURL = "http://localhost:3030/contacts";
  const [contacts, getContacts] = useState("");

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = () => {
    api
      .get(SeeContactURL)
      .then((response) => {
        const allContacts = response.data;
        console.log(response.data);
        console.log(allContacts);
        getContacts(allContacts);
      })
      .catch((error) => {
        alert("Falha ao cadastrar contato");
        console.error(error);
      });
    return {};
  };

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
                <Link to="contacts/register">
                  <IoIosAddCircle size={40} color="#1B7CD6" background="fff" />
                </Link>
              </button>
            </th>
          </tr>
          <tr>
            <td><TableRowName contacts={contacts}/></td>
            <td><TableRowPhone contacts={contacts}/></td>
            <td> <TableRowEdit contacts={contacts}/></td>
            <td> <TableRowDelete contacts={contacts}/></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ListContact;
