const { Router } = require('express'); 
const router = Router(); //routes 
const productoController = require('../controllers/productoController');


router.get('/productos', productoController.search); // Busqueda de productos por  nombre o cualquier letra 
router.get('/productos/:id', productoController.searchById); // busqueda de productos por id del producto
router.get('/productos/categ/:id', productoController.categ); // busqueda de productos por la categoria
//router.get('/productos/nombre_prod/:id', productoController.datosProducto);


module.exports = router