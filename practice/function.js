'use strict';
function total(nedan) {
    const tax = 0.1;
    return nedan * (1 + tax);
}
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円（税込）です。';