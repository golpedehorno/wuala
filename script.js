//Variables que pueden cambiar de valor en el tiempo
var envioGratis = 5600;
var correo = "Argentino";

//Variables que inserta el usuario/cliente
var nombre = prompt("Hola, podría indicarme su nombre?");
var logoElegido = prompt ("Indique 1 si trabaja en Wuala o 2 si trabaja en Flexxus")

//INSERTAR TEXTO EN EL HTML 
document.getElementById("titulo").innerHTML= "Bienvenido " + nombre + "!<br> Estás trabajando en: ";

//INSERTAR IMAGEN EN EL HTML
var logo = document.getElementById("logo")
if(logoElegido==1){
    logo.src = "logowuala.png"
}
else if (logoElegido==2){
    logo.src= "logoflexxus.png"
}
else{
    logo.src= "estrella.gif"
    document.getElementById("titulo").innerHTML=  "<br>";
}

//CAMBIAR DE COLOR TEXTO ANTE EVENTO EN EL DOM
function cambiarColor(){
      titulo.style.color = "pink" ; 
}


//ENVIO GRATIS - para cambiar valor de la variable envioGratis y de variable correo ir al principio de este documento.

console.log(envioGratis)
document.getElementById("tarifa1").innerHTML = "en compras superiores de $" + "<b>" + envioGratis +"</b>";


document.getElementById("tarifa2").innerHTML = "<b>" + correo +"</b>";