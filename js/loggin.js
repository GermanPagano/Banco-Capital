// usuario y contraseña
let nombreusuario
let pw
let objeto = {};
let objetojson;


///////////////////// funcion ingresar usuario

$("#boton").click((e) => {
////// tomamos el valor del input ingresado por el usuario
         nombreusuario = document.getElementById("usuarionombre").value;
         pw = document.getElementById("usuariocontraseña").value.toLowerCase() ;
  if (nombreusuario == "" && pw == "") {
    location.reload();
}
///////// guardamos los datos en el storage

        objeto = { nombre: nombreusuario , pasword: pw}; // creamos un objeto con los datos de usuario y contraseña
        objetojson = JSON.stringify(objeto) // pasamos  los datos string a json almacenado en una nueva variable
        console.log("json" , objetojson)// probamos como queda  con json
        console.log("sinjason", objeto)// probamos como queda  sin json
        sessionStorage.setItem ("user" , objetojson) // guardamos los datos del usuario en formato json en el sessionstorage
        console.log(sessionStorage.getItem("user")) // imprimimos por consola los datos almacenados en formato json

  ///// condicionamos segun su contraseña
  if (pw == "coder" && nombreusuario !== "") {
    window.location.href = 'panel.html';
    $("#homeboton").css({"display":"block"})
    $("#usuario").html( "Bienvenido/a: "+ nombreusuario );
    $("#usuario").css({ "color": "#052044", "font-size": "20px", "line-height": "50px" })



  }else {
    function ventanaSecundaria (URL){
     window.open(URL,"ventana1","width=1080,height=700,scrollbars=NO")
    }

   ventanaSecundaria("registrate.html");
   $("#usuario").html("La Contraseña es incorrecta")
   $("#usuario").css({"color":"#BF323F","font-size":"20px","line-height":"50px","background-color":"#052044"})
  } } )
  ////////recupero datos para navegar entre paginas

 function recuperarDatos () {

    let objetojson = sessionStorage.getItem("user"); // buscamos el objeto guardado como json en el sessionstorage
    console.log(objetojson) // imprimo la informacion para visualizar el formato
    let recordarusuario = JSON.parse(objetojson) // parseo la informacion para poder utilizar su contenido
    console.log(recordarusuario) // imprimimos los datos recuperados del usuario

    nombreusuario = recordarusuario.nombre // asignamos el valor del nombre almacenado a la variable nombredeusuario
   pw = recordarusuario.pw // asignamos el valor de la contraseña almacenada a la variable pw

   $("#usuario").html( "<b>"+"Bienvenido/a nuevamente "+nombreusuario+"<hr>"+"volver al panel: " + " <a href ='panel.html'> volver al Home banking</a > "+"<hr>"+"<a href ='#' onclick='cerrar()'> Cerrar sesion</a >");




/*     $("#usuario").html("Bienvenido/a: " + nombreusuario);
    $("#usuario").css( { "color":"#052044","font-size":"20px","line-height":"50px" }) */



}

function panel() {
  recuperarDatos()
  $("#usuariopanel").html("Bienvenido/a: " + nombreusuario);
  $("#nombrefoto").html(nombreusuario);
}
function cerrar() {

  sessionStorage.clear()
  window.location.href = 'index.html';
}

panel()
recuperarDatos()