const db = require("../config/config");
const Producto = {};

Producto.search = (nombre, result) => {
  const sql = `SELECT * FROM producto WHERE nombre_prod LIKE ?`;
  nombre = '%' + nombre + '%';
  console.log(nombre);

  db.query(sql, [nombre], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Coincidencias encontradas: ", res);
      result(null, res);
    }
  });
};

Producto.searchById = (id, result) => {
  const sql = `SELECT * FROM producto WHERE id_prod = ?`;
  db.query(sql, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Coincidencias encontradas: ", res);
      result(null, res);
    }
  });
};

Producto.categ = (categ, result) => {
  const sql = `SELECT id_prod, nombre_prod, precio_venta FROM producto WHERE id_categ = ?`;
  db.query(sql, [categ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Coincidencias encontradas: ", res);
      result(null, res);
    }
  });
};
  Producto.datosProducto = (datos, result) => {
    const sql = `SELECT nombre_prod, precio_venta, url_img FROM producto WHERE id_prod = ?`;
    db.query(sql, [datos], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Coincidencias encontradas: ", res);
        result(null, res);
      }
    });
};
module.exports = Producto;
