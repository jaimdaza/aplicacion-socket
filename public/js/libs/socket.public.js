// comando para establecer conexion con server

var socket = io();

socket.on('ultimoTicket', function(data) {
    actualizarhtml(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    actualizarhtml(data.ultimos4);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
});

function actualizarhtml(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        $(`#lblTicket${i+1}`).text('Ticket ' + ultimos4[i].numero);
        $(`#lblEscritorio${i+1}`).text('Escritorio ' + ultimos4[i].escritorio);
    }
}