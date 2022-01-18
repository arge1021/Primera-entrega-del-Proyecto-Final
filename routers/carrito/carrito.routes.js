const exports = require('express');
const Carritos = require('../../util/Contenedor')
const carritos = new Contenedor();
const router = express.Router();

router.get('/',(req,res) => {
    if(carritos.getAll()){
        res.json(carritos.getAll());
    }else{
        res.status(404).json({
            error: "No existen Carritos"
        })
    }
});

router.get('/:id',(req,res) => {
    const { id } = req.params;
    if(carritos.getById(id)){
        res.json(carritos.getById(id));
    }else{
        res.status(404).json({error: "Carrito Inexistente"})
    }
})

router.post('/',(req,res) => {
    const { id,idProducto,cantidad,precio,total,fecha} = req.body;
    if(id && idProducto && cantidad && precio && fecha){
        const carrito = {
            id,
            idProducto,
            cantidad,
            precio,
            total,
            fecha
        }
        res.json(carritos.save(carrito));
    }else{
        res.status(400).json({error: "Campos vacios"})
    }
})

router.put('/:id',(req,res) => {
    const { id } = req.params;
    const { idProducto,cantidad,precio,total,fecha } = req.body;
    const carrito = carritos.getById(id);
    if(carrito){
        carrito.idProducto = idProducto;
        carrito.cantidad = cantidad;
        carrito.precio = precio;
        carrito.total = total;
        carrito.fecha = fecha;
    }
})

router.delete('/:id',(req,res) => {
    const {id} = req.params;
    if(carritos.deleteById(id)){
        res.json({
            message: 'Carrito Eliminado'
        })
    }else{
        res.status(404).json({error: 'Carrito Inexistente'})
    }
})

module.exports = router