'use strict';
$(function() {
    $('.submenu h3').on('click', function(){
        $(this).next().toggleClass('hidden')
    });

});