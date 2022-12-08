/*   $(document).ready(getUSD);

function getUSD() {
  console.log("cargo la api")
  $.ajax({

    url: 'https://criptoya.com/api/dolar',

    success: function(respuesta) {

      var Dolarcotizacion = $("#accordion");


      $("#dolaruco").prepend(`<div><h4>Oficial</h4><hr> ${respuesta.oficial}</div>` + `<div><h4>Solidario</h4><hr> ${respuesta.solidario}</div>`
        + `<div><h4>Contado con Liquidacion</h4><hr> ${respuesta.ccl}</div>`
        + `<div><h4>Mep</h4><hr>${respuesta.mep}</div>`);

    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
} */


$(document).ready(getUSD);

function getUSD() {
  console.log("cargo la api")
  $.ajax({

    url: 'https://criptoya.com/api/dolar',

    success: function(respuesta) {

      var Dolarcotizacion = $("#collapseOne");


      $("#collapseOne").prepend(`<p>$ ${respuesta.oficial}.- </p>`);
      $("#collapseTwo").prepend(`<p>$ ${respuesta.solidario}.- </p>`);
      $("#collapseThree").prepend(`<p>$ ${respuesta.ccl}.- </p>`);
/*       $("#collapseFour").prepend(`<p>$ ${respuesta.blue}.- </p>`);
 */    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}


$(document).ready(getbtc);

function getbtc() {
  console.log("cargo la api2")
  $.ajax({

    url: 'https://criptoya.com/api/satoshitango/btc/usd',

    success: function(saber) {

      var btc = $("#collapseFour");


      $("#collapseFour").prepend(`<p>$ ${saber.ask}.- </p>`);
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}