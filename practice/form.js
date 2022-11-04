'use strict';
document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    const text = document.getElementById('form').word.value;
    document.getElementById('output').textContent = `「${text}」の検索中...`;
};