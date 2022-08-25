const { response } = require("express");

const usuariosGet = (req, res) => {
  const query = req.query;
  res.json({
    message: "get API-controlador",
    query,
  });
};
const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "put API-controlador",
    id,
  });
};
const usuariosPost = (req, res) => {
  body = req.body;
  console.log(body);
  res.json({
    message: "post API-controlador",
    body,
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    message: "delete API-controlador",
  });
};
module.exports = { usuariosGet, usuariosPut, usuariosPost, usuariosDelete };
