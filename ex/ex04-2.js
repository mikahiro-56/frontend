'use strict';

function ajaxRequest() {
    const url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=0030806";
    $.ajax({
        url: url,
        dataType: 'json'
    })
        .done(function (data) {
            console.log(data);
            const obj = JSON.parse(JSON.stringify(data));
            document.getElementById('address1').textContent = obj.results[0].address1;
            document.getElementById('address2').textContent = obj.results[0].address2;
            document.getElementById('address3').textContent = obj.results[0].address3;
        })
        .fail(function () {
            console.log("ajax failed!");
        })
}
$(function(){
    ajaxRequest();
})
