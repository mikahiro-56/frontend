'use strict';

let login = localStorage.getItem('login');
if(login === null) {
    let login_username = window.prompt('ユーザー名を入力してください');
    if(login_username != null && login_username.length != 0) {
        login = login_username;
        document.getElementById('username').textContent = login_username;
        localStorage.setItem('login', login);
    } else {
        login_username = '名無し';
        document.getElementById('username').textContent = login_username;
        localStorage.setItem('login', login_username);
    }
} else {
    document.getElementById('username').textContent = login;
}
