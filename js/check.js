'use strict';

function check() {
    const text = document.getElementById('form').message.value;
    if(text === null || text.length === 0) {
        alert('メッセージが未入力です');
    }
}
