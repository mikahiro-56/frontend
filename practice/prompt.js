'use strict';
let anserw = window.prompt('ヘルプを見ますか？');
if(anserw === 'yes') {
    window.alert('タップでジャンプ、障害物をよけます。');
} else if(anserw === 'no') {
    window.alert('ゲーム起動中...');
} else {
    window.alert('yesかnoでお答えください。');
}