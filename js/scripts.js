//document.getElementById("cuatrotext").focus();
//validamos que solo se digiten numeros
function tecleaNumeros(variable){
  numero=parseInt(variable);
  if (isNaN(numero)){
      return "";
  }
  return numero;
}
//validamos que sea un numero y enseguida cambia el focus
function ValidarNumero(evalua, destino){
    evalua.value=tecleaNumeros(evalua.value);
    if (evalua.value.length==evalua.maxLength) destino.focus();
}
//validamos si solo queremos letras en el input
function soloLetras(e){
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false
  for(var i in especiales){
    if(key == especiales[i]){
      tecla_especial = true;
      break;
    }
  }

  if(letras.indexOf(tecla)==-1 && !tecla_especial){
    return false;
  }
}
//esta funcion mustra la fecha de Expedicion
function mostrarFecha(){
  var nowTemp = new Date();
  var month, day, year;
  if(nowTemp.getMonth()+1 < 10){
    month = 0+""+(nowTemp.getMonth()+1);
  }else{
    month = nowTemp.getMonth()+1;
  }

  if(nowTemp.getDate() < 10){
    day = 0+""+nowTemp.getDate();
  }else{
    day = nowTemp.getDate();
  }
  year = nowTemp.getFullYear();

  document.getElementById("aniotext3").value = year+"-"+month+"-"+day;
  console.log(year+"-"+month+"-"+day);
}
function muestra_oculta(id){
  if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
  }
}
/*hace que se carguen las funciónes al ejecutar la pagina*/
window.onload = function(){
  mostrarFecha();/* mostramos la fecha de entrada*/
  muestra_oculta("conceptApt");
  muestra_oculta("datosEmp");
  muestra_oculta("idetPerDep");
  muestra_oculta("conceptIng");
}

function guardar(){
  alert("\"Sr.(a) "+document.getElementById("num28text1").value+" "+document.getElementById("num26text1").value+" Ud a Actualizado los Datos\"");
}