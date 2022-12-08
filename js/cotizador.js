 
let tipo = 0;
let monto = 0;
let cuotas = 0;
let intereses = 0;
let iva = 21;
let montosolicitado =  0;
let gastos = 1000;

const arrayDATOS = [ ]




///////////////////// funcion que recibe los datos de la solicitud

function cotizador() {

    document.getElementById("simulador").style.display="none"
  document.getElementById("resultado").style.display = "block"
  document.getElementById("intereses").style.display = "flex"
  document.getElementById("intereses").style.flexDirection="column"
  document.getElementById("valorcuota").style.display = "flex"
  document.getElementById("valorcuota").style.flexDirection = "column"
    document.getElementById("volver").style.display="block"

  tipo = document.getElementById("tipo_prestamo").value
  monto = document.getElementById("montoinput").value
  cuotas = document.getElementById("cuotas").value

  montosolicitado = montosolicitado + monto

prestamo()
}


////////////////// funcion que escribe en pantalla 
function prestamo() {

    if ( tipo == 60 ) {
              switch (true)  {
  
                   case ( cuotas <= 12 ):
                         monto = Math.round( monto * 1.60 )   
                         intereses = 1.60 
                         break;
                   case (cuotas > 12) && (cuotas <= 24) : 
                         monto = Math.round( monto * 2.20 )  
                         intereses = 2.20 
                         break ; 
                   case (cuotas > 24) && (cuotas <= 36) : 
                         monto = Math.round( monto * 2.80 )  
                         intereses = 2.80 
                         break ; 
                   case (cuotas > 36) && (cuotas <= 48) : 
                         monto = Math.round( monto * 3.20 )  
                         intereses = 3.40 
                         break ; 
                   case (cuotas > 48) && (cuotas <= 60) : 
                         monto = Math.round( monto * 3.80 )  
                         intereses = 3.80 
                         break ; 
      } 
  } else {
              switch (tipo == 80) {
  
                case ( cuotas <= 12 ):
                  monto = Math.round( monto * 1.80 )   
                  intereses = 1.80 
                  break;
                case (cuotas > 12) && (cuotas <= 24) : 
                  monto = Math.round( monto * 2.60 )  
                  intereses = 2.60 
                  break ; 
                case (cuotas > 24) && (cuotas <= 36) : 
                  monto = Math.round( monto * 3.40 )  
                  intereses = 3.40
                  break ; 
                case (cuotas > 36) && (cuotas <= 48) : 
                  monto = Math.round( monto * 4.20 )  
                  intereses = 4.20 
                  break ; 
                case (cuotas > 48) && (cuotas <= 60) : 
                  monto = Math.round( monto * 3.60 )  
                  intereses = 3.60 
                  break ; 
              }
  }
  
  //////////////////////// datos del prestamo
  let cuotapura = Math.round (((monto + gastos) / cuotas)) ;
  let ivacuota = Math.round (((monto * iva) / 100) / cuotas);
  let ivatotal = ivacuota * cuotas
  let cuotafinal = Math.round(( cuotapura + ivacuota  ));
  let deudatotal = ( cuotafinal * cuotas ) 
  let CFT =  Math.round (  (montosolicitado * tipo + ivatotal + gastos)/ montosolicitado)
  
  
  /////////////////////////// primer recuadro 
  document.getElementById("cuotapura").innerHTML = " Cuota pura con intereses y Gastos: $" + cuotapura 
  document.getElementById("iva").innerHTML = "  I.V.A por cuota: $" + ivacuota
  document.getElementById("gastos").innerHTML = " Gastos y Seguros: $" + Math.floor (gastos / cuotas)
  document.getElementById("cuotatotal").innerHTML = "Cuota final: $" + cuotafinal
  
  ///////////////////////// segundo recuadro 
  document.getElementById("tasaanual").innerHTML = "Tasa anual: " + tipo + "%"
  document.getElementById("cft").innerHTML = "CFT: " + CFT+ "%"
  document.getElementById("deuda").innerHTML = "Devolves: $" + deudatotal 
  
  /////////////////////////////////// ENTREGA CLASE 6 /////////////////////////////////
  
  arrayDATOS.push ( { Intereses: tipo + "%" , monto: monto , cuotas: cuotas  })
  arrayDATOS.push ( { Montofinal: deudatotal + "$" , cuotafinal: cuotafinal + "$" , CFT: CFT +"%"  })
  
  const buscador = arrayDATOS.find(elemento => elemento.Montofinal );
  const buscador2 = arrayDATOS.find ( elemento => elemento.cuotas)
  const buscador3 = arrayDATOS.find ( elemento => elemento.cuotafinal)
  
  console.log("Monto final a devolver: " + buscador.Montofinal)
  console.log("Pagará " + buscador2.cuotas + " cuotas " + " de " + buscador3.cuotafinal + " pesos ")
  
  console.log(arrayDATOS)
  
  }
  
  ///////////////// funcion del boton Volver  con manejador de evento desde jquery

$("#refrescar").on("click", ()=> {
    location.reload();
})

