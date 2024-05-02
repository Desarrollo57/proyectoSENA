const db = require("../config/config");
const Carrito = {};

Carrito.getById = (id, result) => {
  const sql = `SELECT * FROM carrito WHERE id_clien = ?`;
  db.query(sql, [id], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Carrito.create = (carrito, result) => {
  const sql = `INSERT INTO carrito(
                id_clien,
                estado_prod,
                id_prod,
                cantidad,
                fecha_venta,
                total
            )
                VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [
      carrito.id_clien,
      carrito.estado_prod,
      carrito.id_prod,
      carrito.cantidad,
      new Date(),
      carrito.total,
    ],
    (err, res) => {
      if (err) {
        console.log("error DB: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
// PARA SUMAR UNA UNIDAD AL CARRITO CUANDO SE PULZA EL ICONO (+)
Carrito.add = (venta,  result) => {
  const sql = `UPDATE carrito SET cantidad =  cantidad + 1,  total = cantidad * precio_venta where id_clien = ? AND id_prod = ? AND estado_prod = 1`;
  db.query(sql, [venta.id_cliente, venta.id_prod], (err, res) => {
    if (err) {
      console.log("error Db: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
// PARA RESTAR UNA UNIDAD AL CARRITO CUANDO SE PULZA EL ICONO (-)
Carrito.min = (venta,  result) => {
    const sql = `UPDATE carrito SET cantidad =  cantidad - 1,  total = cantidad * precio_venta where id_clien = ? AND id_prod = ? AND estado_prod = 1`;
    db.query(sql, [venta.id_cliente, venta.id_prod], (err, res) => {
      if (err) {
        console.log("error Db: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  };

Carrito.addShop = (shop, result) => {
  const sql = `select producto.id_prod, producto.nombre_prod, producto.precio_venta, carrito.id_clien, carrito.Total, producto.descripcion, clientes.nombre_clien, carrito.cantidad
                from producto
                inner join carrito on producto.id_prod = carrito.id_prod
                join clientes on carrito.id_clien=clientes.id_clien;`;
  db.query(sql, [shop], (err, res) => {
    if (err) {
      console.log("error DB: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Carrito;
