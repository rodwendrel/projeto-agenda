import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import "./style.css";

export default function TableRow(props) {
  const displayContacts = (props) => {
    const { contacts } = props;

    if (contacts.length > 0) {
      return contacts.map((contact, index) => {
        console.log("0" + contact);
        return (
          <div class="table-row">
            <span className="phone"> {contact.phone} </span>
          </div>
        );
      });
    } else {
      return <h2> Sem contatos cadastrados </h2>;
    }
  };

  return <> {displayContacts(props)} </>;
}
