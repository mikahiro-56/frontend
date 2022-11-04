'use strict'
$(function () {
    const title = document.getElementById('username').textContent;
    $("#usericon").attr('title',title);
    $('[data-toggle="tooltip"]').tooltip();
});
