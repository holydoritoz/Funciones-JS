//Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función
// Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
// funcionando en conjunto con el código modificado.

const element = document.getElementById('ele1');
element.style.backgroundColor = 'green'

const pintar = ({ target }, color) => {
  target.style.backgroundColor = color;
}

element.addEventListener("click", (evt) => {
  pintar(evt, 'yellow')
});

