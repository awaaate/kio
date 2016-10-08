var socket = io();
alert("hola")
var lista = "white"
$('.form').submit(function(){
    socket.emit('chat message', $('#m').val(), "{{ name }}");
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg, server){
    if(lista == "white"){
        lista = "black"
    }
    else{
        lista = 'white'
    }
    if(server === "{{name}}"){
        $('#messages').append($('<li class='+ lista +'>').text(msg));
    }
      
});