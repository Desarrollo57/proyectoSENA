const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
//setqings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./src/routes/userRoutes'));
app.use(require('./src/routes/productoRoutes'));
app.use(require('./src/routes/carritoRouters'));


//Inicializar el servidor
app.listen(3000, () => {
console.log( `Server is running on port ${app.get('port')}`);
});


