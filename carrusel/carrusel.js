$(document).ready(function(){

    $('#miCarrusel').carousel({
        interval: 1000
    });

    $('#miCarrusel').mouseover(function(){
        $(this).carousel('pause');
    });
})