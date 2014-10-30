
$(function() {
    var chatHub = $.connection.chatHub;

    chatHub.client.broadcast = function (msg) {
        $('<li>').text(msg).appendTo('#msgs');
    }

    $.connection.hub.start(function() {

        $('#send').click(function() {

            chatHub.server.sendMessage($('#msg').val());
        });

    });

})