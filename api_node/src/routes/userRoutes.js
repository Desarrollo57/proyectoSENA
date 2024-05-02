const { Router } = require('express'); 
const router = Router(); //routes 
const userController = require('../controllers/userController');



router.post('/clientes', userController.register); // esto sirve para registrarse 
router.post('/clientes/login', userController.login); // esto sirve para logearse 
router.get('/clientes/search', userController.search); // esto sirve para ver si el usuario ya está registrado 
router.get('/clientes/:id', userController.nombreCliente); // esto sirve para ver los datos del cliente registrado en la base de datos -_-



module.exports = router;
