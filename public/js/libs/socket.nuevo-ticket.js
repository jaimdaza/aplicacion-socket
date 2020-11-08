// comando para establecer conexion con server

var socket = io();
var label = $('#lblNuevoTicket');

// se ejecuta cuando se conecta al servidor
// on escuchar mensajes
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

// se ejecuta cuando pierde conexion con el servidor
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//escuchar lo que viene del servidor
socket.on('ultimoTicket', (ultimoTicket) => {
    console.log(ultimoTicket.ultimo);
    label.text(ultimoTicket.ultimo);
});

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});