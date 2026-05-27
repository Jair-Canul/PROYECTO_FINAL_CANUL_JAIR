new WOW().init();

// funcion modal
$(document).ready(function (){
    // Evento manual para abrir desde tus menús
    $(".btn-abrir-modal").click(function(e){
        e.preventDefault();
        $("#modal").css("display", "flex");
    });

    // Evento manual para cerrar con tu nuevo icono superior
    $("#btn-cerrar-modal").click(function(e){
        e.preventDefault();
        $("#modal").css("display", "none");
    });
});

//funcion Validar Formulario
$(document).on("submit", "#formulario_contacto", function(e) {
    e.preventDefault(); 

    var nombre   = $.trim($("#nombre").val());
    var correo   = $.trim($("#correo").val());
    var telefono = $.trim($("#telefono").val());
    var asunto   = $.trim($("#asunto").val());
    var mensaje  = $.trim($("#mensaje").val());

    var filtroCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        $("#nombre").focus();
        return false 
    }
    else if (correo === "") {
        alert("Por favor, ingrese su correo.");
        $("#correo").focus();
        return false 
    }
    else if (!filtroCorreo.test(correo)) {
        alert("Por favor, ingrese un correo electrónico valido (ejemplo@gmail.com).");
        $("#correo").focus();
        return false 
    }
    else if (telefono === "") {
        alert("Por favor, ingrese su telefono.");
        $("#telefono").focus();
        return false 
    }
    else if (asunto === "") {
        alert("Por favor, ingrese el asunto de su mensaje");
        $("#asunto").focus();
        return false 
    }
    else if (mensaje === "") {
        alert("Por favor, ingrese el mensaje que nos desea enviar.");
        $("#mensaje").focus();
        return false 
    }

    alert("!Muchas gracias " + nombre + "! Tu mensaje se ha validado y enviado con éxito.")
    $("#formulario_contacto")[0].reset();
    $("modal").fadeOut();
});
// funcion abrir menu
$("#abrir_menu").click(function(){
    $("#menu_responsivo").addClass("abrir");
});

// funcion cerrar menu
$("#cerrar_menu").click(function(){
    $("#menu_responsivo").removeClass("abrir");
});

//  funcion scroll
$("#btn-up").click(function() {

    $("html, body").animate({
        scrollTop: 0
    }, 800);
});

// funcion responsiveslides
$(function() {
    $(".rslides").responsiveSlides({
        auto: true,
        speed: 500,
        timeout: 5000,
        nav: true,
        prevText: '<i class="fa-solid fa-angle-left"></i>',
        nextText: '<i class="fa-solid fa-angle-right"></i>',
    });
});
// funciones acordeon
$(".acordeon_titulo").click(function(){
    var t = $(this);
    var tp = t.next();
    tp.slideToggle();
    t.find(".flecha").toggleClass("rotarflecha");
});

// funciones tab
$(".tab_content").hide();
$(".tabs li:first").addClass("active").show();
$(".tab_content:first").show();

//Evento click al botón
$(".tabs li").click(function(){
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide("active");

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
});

// function fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


