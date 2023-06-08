const { request, response } = require("express");

const getUsers = (req = request, res = response) => {

 const {q, edad, estado, ciudad, page='1', limit } = req.query;

  res.json({
    ok: true,
    status: 200,
    msg: "GET controller",
    q,
    edad,
    estado,
    ciudad,
    page,
    limit
  });
};

const putUsers = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    status: 200,
    msg: "PUT Controller",
    id,
  });
};
const postUsers = (req = request, res = response) => {
  const body = req.body;

  res.json({
    ok: true,
    status: 200,
    msg: "POST Controller",
    body,
  });
};

const deleteUsers = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    ok: true,
    status: 200,
    msg: "DELETE Controller",
    id
  });
};
const patchUsers = (req = request, res = response) => {
  res.json({
    ok: true,
    status: 200,
    msg: "PATCH Controller",
  });
};

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
  patchUsers,
};
