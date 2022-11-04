'use strict';

function weatherRequest() {
    const city = "016010";
    const url = "https://weather.tsukumijima.net/api/forecast/city/016010";
    $.ajax({
        url: url,
        data: {
            city: city
        },
        dataType: 'json'
    })
        .done(function (data) {
            console.log(data);
            const obj = JSON.parse(JSON.stringify(data));
            document.getElementById('tomorrow').textContent = obj.forecasts[1].date;
            document.getElementById('weather').textContent = obj.forecasts[1].telop;
            document.getElementById('weather-img').setAttribute("src", obj.forecasts[1].image.url);
            document.getElementById('rainy').textContent = obj.forecasts[1].chanceOfRain.T06_12;
            document.getElementById('temp-max').textContent = obj.forecasts[1].temperature.max.celsius;
            document.getElementById('temp-min').textContent = obj.forecasts[1].temperature.min.celsius;
        })
        .fail(function () {
            console.log("ajax failed!");
        })
}
$(function(){
    weatherRequest();
})