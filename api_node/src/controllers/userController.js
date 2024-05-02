const User = require("../models/user");

module.exports = {
  register(req, res) {
    const user = req.body; //Datos del cliente
    
    User.create(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al crear el usuario",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Creado el usuario",
        data: data, //Id del usuario creado
      });
    });
  },

  login(req, res) {
    const user = req.body; //Datos del cliente  
    User.login(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al ingresar",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "consulta realizada",
        data: data, //Id del usuario creado
      });
    });
  },

  search(req, res) {
    const user = req.body; //Datos del cliente  
    User.search(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al ingresar",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "coincidencias encontradas",
        data: data, //Id del usuario creado
      });
    });
  },
  
  nombreCliente(req, res) {
    const user = req.params.id; //Datos del cliente  
    User.nombreCliente(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "nombre no encontrado",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "coincidencias encontradas",
        data: data, //Id del usuario creado
      });
    });
  },




};
