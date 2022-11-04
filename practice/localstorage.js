'use strict';
let data = localStorage.getItem('key');
let input_data = window.prompt('現在のデータ：' + data);
if(input_data != null) {
    localStorage.setItem('key', input_data);
}
document.getElementById('data').textContent = input_data;