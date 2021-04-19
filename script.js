

var nombre = prompt("Hola, podría indicarme su nombre?");
document.getElementById("titulo").innerHTML= "Bienvenido " + nombre + "!<br> Estás trabajando en: ";

var logo = document.getElementById("logo")
var logoElegido = prompt ("Indique 1 si trabaja en Wuala o 2 si trabaja en Flexxus")

if(logoElegido==1){
    logo.src = "logowuala.png"
}
else if (logoElegido==2){
    logo.src= "logoflexxus.png"
}
else{
    logo.src= "estrella.gif"
}



console.log("naty")


function cambiarColor(){
      titulo.style.color = "pink" ; 
}



//ENVIO GRATIS - cambiar valor en variable envioGratis y de var correo para que repercuta en el DOM
var envioGratis = 5600;
console.log(envioGratis)
document.getElementById("tarifa1").innerHTML = "en compras superiores de $" + "<b>" + envioGratis +"</b>";

var correo = "Argentino";
document.getElementById("tarifa2").innerHTML = "<b>" + correo +"</b>";