const db = require("../config/config");
const User = {};
User.create = (user, result) => {
 
  const sql = `
        INSERT INTO clientes(
        razon_social, 
        direccion,
        telefono,
        nombre_clien,
        correo,
        contrasenia
        )
        VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [
      user.razon_social,
      user.direccion,
      user.telefono,
      user.nombre_clien,
      user.correo,
      user.contrasenia,
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Id del nuevo Usuario: ", res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

User.login=(user, result) => {
 
  const sql = `select id_clien, razon_social from clientes where correo = ? and contrasenia = ?`;
  db.query(
    sql,
    [
      user.correo,
      user.contrasenia
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Usuario encontrado: ", res);
        result(null, res);
      }
    }
  );
};

User.search=(user, result) => {
 
  const sql = `select count(*) from clientes where correo = ?`;
  db.query(
    sql,
    [
      user.correo
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Coincidencias encontradas: ", res);
        result(null, res);
      }
    }
  );
};



  
  User.nombreCliente=(nombre, result) => {
 
    const sql = `SELECT nombre_clien FROM clientes WHERE id_clien = ?`;
    db.query(
      sql,
      [
        nombre
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Coincidencias encontradas: ", res);
          result(null, res);
        }
      }
    );
  };



module.exports = User;
