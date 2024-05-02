const { Router} = require('express')
const router = Router();
const carritoController = require("../controllers/carritoController");

router.get('/carritos/:id', carritoController.getById); //Ruta trae toda la informacion insertada en carrito atravez del cliente = id_clien 
router.post('/carritos', carritoController.addProd); // agrega un producto al carrito REVISAR QUE TRAIGA EL PRECIO DE VENTA
router.put('/venta/cantidad', carritoController.addCantidad); // agrega una unidad a un producto y luego multiplica la cantidad de productos por el precio de venta y totaliza.
router.put('/venta/mincantidad', carritoController.minCantidad); // resta una unidad a un producto y luego multiplica la cantidad de productos por el precio de venta y totaliza. REVISAR POR QUE NO FUNCIONA
router.get('/carritos/usuario/:id', carritoController.shopUser); //para verificar si el carrito existe o no existe  PENDIENTE WHERE (JOHAN)

module.exports = router;
