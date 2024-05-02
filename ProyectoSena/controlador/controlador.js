vista = new Vista()


/**
 *  Se ejecuta al inicar
 */
window.addEventListener('load', function() {

    vista.mostrarPlantilla('bienvenidaUsuario', 'areaDeTrabajo');
    
});
/**
 * Navegacion de boton de vista Bienvenida para vista Iniciar sesion
 */
function mostrarPantallaIncicioSesion(){
    vista.mostrarPlantilla('encabezado1','contenedorEncabezado');
    vista.mostrarPlantilla('formIniciarSesion', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1','pieDePagina');
}
/** Navegacion de boton de vista Bienvenida para vista Registrar */
function mostrarPantallaRegistrar(){
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('registroUsuario', 'areaDeTrabajo')
    vista.mostrarPlantilla('footer1','pieDePagina');
}
/** Navegacion de boton de vista Iniciar sesion para vista Producto */

function mostrarPantallaPrincipal() {
    vista.mostrarPlantilla('headerProductosCarrito', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoProducto', 'areaDeTrabajo');
   
    
}

/** Navegacion de boton Regresar  de vista Iniciar sesion para vista Bienvenida */
function mostrarPantallaBienvenida() {
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('bienvenidaUsuario', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1', 'pieDePagina');
    
}

/**ingresarinicio */
function mostrarPantallaIncicioSesionRegresar(){
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('formIniciarSesion', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1', 'pieDePagina');
}
 
/**detalleproducto */
function mostrarPantallaDetallesProducto(){
    vista.mostrarPlantilla('headerProductos', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoDetallesProductos', 'areaDeTrabajo');
    vista.mostrarPlantilla('footerProductos', 'pieDePagina');
    
}
/**agregarcarrito */

function mostrarPantallaCarrito(){
    vista.mostrarPlantilla('headerProductos', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoCarritoCompra', 'areaDeTrabajo');
    vista.limpiarArea('pieDePagina');
}

/** Navegacion de boton Regresar  de vista detalles productos  para vista Productos */

function regresarPantallaProducto(){
    vista.mostrarPlantilla('headerProductosCarrito', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoProducto', 'areaDeTrabajo');
}

function mostrarPantallaCarrito1(){
    vista.limpiarArea('contenedorEncabezado')
    vista.mostrarPlantilla('headerProductos','contenedorEncabezado')
    vista.mostrarPlantilla('contenidoCarritoCompra', 'areaDeTrabajo');
    vista.limpiarArea('pieDePagina');
}