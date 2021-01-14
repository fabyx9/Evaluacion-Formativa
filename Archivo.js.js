$(document).ready(function(){
    alert("ACEPTA TODOS LOS TERMINOS Y CONDICIONES PARA ENTRAR A NUESTRA PÁGINA Y DA CLICK EN ACEPTAR");
    var boton = $('#boton');

    $('#ejecutar').on('click',function(){
        $('.caja').slideUp(2500, function(){
            $(this).slideDown(2500);
        });
    });
});