'use strict';
$(function() {
    $('#logout').on('click', function(){
            localStorage.removeItem('login');
            document.getElementById('username').textContent = "";
            alert('ログアウトしました');
    });
});