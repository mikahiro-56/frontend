'use strict';
$(function () {
  $('#message').on('keydown keyup keypress change', function () {
    const input = $('#message').val().length;
    if (input) {
      $('#send-btn').prop("disabled", false);
    } else {
      $('#send-btn').prop("disabled", true);
    }
  });
});