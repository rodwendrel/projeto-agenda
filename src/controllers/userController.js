'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../config/auth.json')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

//lista usuários

exports.get = (req, res, next) => {
    User
        .find({}, 'user password email')
        .then(data => {
            res.status(200).send(data);

        }).catch(e => {
            res.status(400).send(e);
        });
}


//cadastra usuário

exports.post = (req, res, next) => {
    let user = new User(req.body);
    user
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Usuário cadastrado com sucesso!',
                user,
                token: generateToken({ id: user.id }),
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar usuário',
                data: e,
            });
        });
};


exports.auth = (async (req, res, next) => {
    const { user, password } = req.body;

    const login = await User.findOne({ user }).select('+password');

    if (!login)
        return res.status(400).send({ erro: "Usuário não encontrado" });

    if (!await bcrypt.compare(password, login.password))
        return res.status(400).send({ erro: "Senha inválida" });

    login.password = undefined;

    const token = jwt.sign({ id: login.id }, authConfig.secret, {
        expiresIn: 86400,
    })

    res.send({
        login,
        token: generateToken({ id: login.id }),
    });
});



exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};


exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}

