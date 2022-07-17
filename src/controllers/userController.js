"use strict";

const mongoose = require("mongoose");
const User = mongoose.model("User");

//lista usuários

exports.get = (req, res, next) => {
  User.find({}, "user email")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

//cadastra usuários

exports.post = (req, res, next) => {
  let user = new User(req.body);
  let { email } = req.body;
  user
    .save()
    .then((x) => {
      res.status(201).send({
        message: "Usuário cadastrado com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao cadastrar usuário",
        data: e,
      });
    });
};

exports.put = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body,
  });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};
