const express = require('express');
const rutas = require('./routers/app.routers');
const app = express();
const PORT = process.env.PORT || 8080;
const server = require('http').Server(app);
const io = require('socket.io')(server);


//Middlewares
app.use(express.static('public'));

/*io.on('connection',function(socket){
    console.log("Cliente Conectado");
});*/

/*const srv = server.listen(PORT,function(){
    console.log(`Servidor con WebSockets en puerto ${this.address().port}`);
});*/

/*srv.on('error',error=>console.log("Error en el servidor"));*/

//Routes
app.use('/api', rutas);

const connectedApp = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`);
});

connectedApp.on('error', (err) => {
    console.error(err);
});