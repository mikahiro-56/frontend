/**
 * https://techacademy.jp/magazine/24324
 */
'use strict';
$(function () {
  $('#word').on('keydown keyup keypress change', function () {
    const input = $('#word').val().length;
    if (input) {
      $('#search').prop("disabled", false);
    } else {
      $('#search').prop("disabled", false);
    }
  });
});