'use strict';

const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

//lista usuários

exports.get = (req, res, next) => {
    Contact
        .find({}, 'name secondName phone email')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//cadastra usuários

exports.post = (req, res, next) => {
    //const {name_contact, secondName_contact, email_contact, phone_contact} = req.body
    let contacts = new Contact(req.body);
    contacts
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Contato cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar contato',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    Contact
        .findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                secondName: req.body.secondName,
                phone: req.body.phone,
                email: req.body.email
            }
        }).then(x => {
            res.status(200).send({
                message: 'Contato atualizado!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar contato!',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    Contact
        .findOneAndRemove(req.params.id, {
        }).then(x => {
            res.status(200).send({
                message: 'Contato removido!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover contato!',
                data: e
            });
        });
}