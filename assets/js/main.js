//Para crear un nuevo div desde js en html//
/*var body = document.body;
var div = document.createElement("div");
div.innerHTML = "";
body.appendChild(div);*/

//alert("hola"); para comprobar la conecciokn de mi js en mi html//

var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa = document.getElementById("rosa");
var azul = document.getElementById("azul");
var verde = document.getElementById("verde");
var amarillo = document.getElementById("amarillo");

contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

/*para que funcione esta parte se le debe borrar todo dato de coordenadas en css,
solo se le deja el background-color*/
azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0px";
