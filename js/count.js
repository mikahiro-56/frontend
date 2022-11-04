'use strict';
$(function() {
    $('#count').text(120);
    $('#message').on('input', function() {
        if($('#message').val().length != 0) {
            let count = 120 - $('#message').val().length;
            if($('#message').val().length > 120) {
                $('#message').on('keydown keyup keypress change', function () {
                    $('#send-btn').prop("disabled", true);
                });
            } else {
                $('#count').text(count);
            }
        } else {
            $('#count').text(120);
        }
    });
});