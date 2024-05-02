const Producto = require("../models/producto");

module.exports = {
  searchById(req, res) {
    const prod = req.params.id; //id del producto
    console.log("producto: " + prod);

    Producto.searchById(prod, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Id no encontrado",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Datos del producto",
        data: data, 
      });
    });
  },

  
  search(req, res) {
    const nombre = req.query.nombre; 

    console.log("nombre: " + nombre);

    Producto.search(nombre, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar producto",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "producto encontrado",
        data: data, 
      });
    });
  },
  
  
  

  
  
  categ(req, res) {
    const categ = req.params.id; // id categoria
    console.log("categorias: " + categ);
    
    Producto.categ(categ, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar productos",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "listado de productos por categoria",
        data: data, 
      });
    });
  },

  datosProducto(req, res) {
    const datos = req.params.id; 
    
    
    Producto.datosProducto(datos, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Producto no encontrado",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Productos encontrados",
        data: data, 
      });
    });
  },
};