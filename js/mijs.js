$(document).ready(function(){
    // Activate carusel
    $("#myCarousel").carousel();
    
    // Activar controles carusel
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel('prev');
    });
    $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel('next');
    });
    
    // Activar indicadores del carrusel
    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
    });
});