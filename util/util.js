const { productos } = require('../data/data');

function generarId() {
    const maxID = productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) : 0;
    return maxID + 1;
}
function generarIdCarrito() {
    const maxID = carritos.length > 0 ? Math.max(...carritos.map(carrito => carrito.id)) : 0;
    return maxID + 1;
}

module.exports = generarId;
module.exports = generarIdCarrito;