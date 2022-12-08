let mensaje;
// ocultamos al inicio de la pagina el chat
$("#chat").css({ "display": "none" });
$("#texto1").css({ "display": "none" });
$("#texto2").css({ "display": "none" });
$("#texto3").css({ "display": "none" });

$("#chat").fadeIn(3000).delay(5000);

$("#texto1").fadeIn(3000).delay(5000);
$("#texto2").fadeIn(3000).delay(5000);
$("#texto3").fadeIn(3000).delay(5000);


//
// cerrar chat anticipadamente//
//
$("#cruz").on("click", ()=> {
    $("#cabezachat").css({ "display": "none" });
    $("#texto1").css({ "display": "none" });
    $("#texto2").css({ "display": "none" });
    $("#texto3").css({ "display": "none" });

    $("#mensaje1").css({ "display": "none" });
    $("#cajachat").css({ "display": "none" });

        // query que da estilo a la nueva caja de chat con el logo del robot sberto
    $("#chat").css({
        // doy estilo a la caja
        "width": "200px",
        "height": "100px",
        "float": "right",
        "background-color": "transparent",
    })
    // colocamos la foto del robot con un vinculo al contacto de la pagina
    $("#chat").prepend('<a href= "cotizaciones.html"><img src="img/robotica.svg" alt="robot"  style="width: 100px; border-radius: 100%; height: auto;" ></a>')
})


//
// enviar mensaje a robot //
//

$("#enviartexto").on("click", () => {
    // pruebo que funciona el click
    console.log("enviaste el mje")
    // asigno el valor del input text a la variable mensaje
    mensaje = $("#textochat").val()
    // escribo el mensaje en consola , previo a imprimir en pantalla
    console.log(mensaje)

    // escribimos el mje en pantalla de chat
    $("#mensaje1").html(mensaje).css({
    // doy estilo al texto impreso con .css
        "margin-right": "10px",
        "text-align": "center",
        "font-size": "15px",
        "float": "right",
        "font-style": "italic",
        "font-family": "Arial",
        "color": "#3A3E3B ",
        "background-color": "#CEF5D8",
        "width": "75%"
    })
    // borramos el valor del input
    $("#textochat").val("")


})

// funcion que permite enviar el mensaje presionando la tecla Enter
if($('#textochat').length > 0)
{
    $('#textochat').keypress(function (e){
        code = e.keyCode ? e.keyCode : e.which;
        if(code.toString() == 13)
        {
            mensaje =  $("#textochat").val()
            // escribo el mensaje en consola , previo a imprimir en pantalla x2
            console.log(mensaje)

            // escribimos el mje en pantalla de chat  x2
            $("#mensaje1").html(mensaje).css({
            // doy estilo al texto impreso con .css     x2
                "margin-right": "10px",
                "text-align": "center",
                "font-size": "15px",
                "float": "right",
                "font-style": "italic",
                "font-family": "Arial",
                "color": "#3A3E3B ",
                "margin-top": "15px ",
                "background-color": "#CEF5D8",
                "width": "75%"
            })
            // borramos el valor del input x2
            $("#textochat").val("")
        }
    })
}


window.setTimeout( () => {
    /// animacion para desaparecer el chat
    console.log("Entro en el settime") // pruebo el set si entra en el momento deseado

$("#chat").animate({
    opacity:'2.0',
    height:'0px',
    width: '50px',

},
    999, //velocidad de cierre de ventana
    function () {   // funcion que esconde el contenido del div

        $("#cabezachat").css({ "display": "none" });
        $("#texto1").css({ "display": "none" });
        $("#texto2").css({ "display": "none" });
        $("#texto3").css({ "display": "none" });

        $("#mensaje1").css({ "display": "none" });
        $("#cajachat").css({ "display": "none" });

            // query que da estilo a la nueva caja de chat con el logo del robot sberto
        $("#chat").css({
            // doy estilo a la caja
            "width": "200px",
            "height": "100px",
            "float": "right",
            "background-color": "transparent",
        })
        // colocamos la foto del robot con un vinculo al contacto de la pagina
 /*        $("#chat").prepend('<a href= "cotizaciones.html"><img src="img/robotica.svg" alt="robot"  style="width: 100px; border-radius: 100%; height: auto;" ></a>') */

        // mensaje de finalizacion de la animacion
    console.log("final de animación");
}) }, 10000

);

