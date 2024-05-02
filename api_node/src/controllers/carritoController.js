const Carrito = require("../models/carrito");

module.exports = {
  getById(req, res) {
    const id = req.params.id;
    console.log("datos de carrito: " + id);

    Carrito.getById(id, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Carrito no contiene nada",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Contenido del carrito ",
        data: data,
      });
    });
  },

  addProd(req, res) {
    const carrito = req.body;

    Carrito.create(carrito, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "error al agregar al carrito",
          data: data,
        });
      }
      return res.status(201).json({
        success: true,
        message: "datos creados en el carrito",
        data: data,
      });
    });
  },

  minCantidad(req, res) {
    const venta = req.body;
    Carrito.min(id_cliente, venta, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "error al restar la cantidad",
          data: data,
        });
      }

      return res.status(201).json({
        success: true,
        message: "cantidad cambiada",
        data: data,
      });
    });
  },

  addCantidad(req, res) {
    const venta = req.body;
    Carrito.add(id_cliente, venta, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "error al cambiar la cantidad",
          data: data,
        });
      }

      return res.status(201).json({
        success: true,
        message: "cantidad cambiada",
        data: data,
      });
    });
  },

  shopUser(req, res) {
    const shop = req.params.id;
    Carrito.addShop(shop, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "error al ingresar al carrito",
          data: data,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Datos encontrados",
        data: data,
      });
    });
  },
};
