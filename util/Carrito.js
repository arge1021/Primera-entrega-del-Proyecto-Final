const { carritos } = require('../data/data');
const generarIdCarrito = require('../util');
class Carritos{

    constructor(){
        this.carritos = carritos;
    }

    save(obj){
        if(!obj){
            return false; 
        }
        const nuevoRegistro = {...obj,id : generarIdCarrito() }
        this.carritos.push(nuevoRegistro);
        return nuevoRegistro.id;
    }

    getAll(){
        return this.carritos;
    }

    getById(id){
        if(!id) return false;
        const carrito = this.carritos.find(carrito => carrito.id === id);
        if(carrito){
            return carrito
        } else {
            return false;
        }   
    }

    deleteById(id){
        if(!id) return false;
        const carrito = this.carritos.find(carrito => carrito.id);
        if(carrito){
            const index = this.carritos.indexOf(carrito);
            this.carritos.splice(index, 1);
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Carritos;