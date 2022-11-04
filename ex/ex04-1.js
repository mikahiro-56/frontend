'use strict';

function ajaxRequest() {
    const url = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";
    $.ajax({
        url: url,
        dataType: 'json'
    })
        .done(function (data) {
            console.log(data);
            const obj = JSON.parse(JSON.stringify(data));
            document.getElementById('coronaprice').textContent = obj[0].name_ja;
            document.getElementById('coronaquantity').textContent = obj[0].cases;
        })
        .fail(function () {
            console.log("ajax failed!");
        })
}
$(function(){
    ajaxRequest();
})