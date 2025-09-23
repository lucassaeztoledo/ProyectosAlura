// Se seleccionan los elementos del HTML
const listaAmigos = document.querySelector("#listaAmigos");
const input = document.querySelector(".input-name");
const sortearBtn = document.querySelector(".button-draw");
const resultado = document.querySelector("#resultado");

// Se genera el arreglo vacío para los nombres
let nombresAmigos = [];

// La función agregarAmigo recupera el valor del input
// Valida que no esté vacío
// Agrega el nombre a la lista
// Limpia el input
// Llama a inyectarNombres para mostrarlos en el HTML
function agregarAmigo() {
  let nombre = input.value.trim();

  if (!nombre) {
    alert("ERROR: Por favor, inserte un nombre");
    return;
  }

  nombresAmigos.push(nombre);

  input.value = "";

  inyectarNombres(listaAmigos, nombresAmigos);
}

// La función inyectarNombres limpia el HTML
// Itera sobre los nombres y los inserta en el HTML
function inyectarNombres(lista, nombres) {
  while (lista.firstChild) {
    lista.firstChild.remove();
  }

  nombres.forEach((nombre) => {
    const li = document.createElement("LI");
    li.innerText = nombre;
    listaAmigos.appendChild(li);
  });
}

// La función sortearAmigo toma un número aleatorio
// Toma ese número como índice de la lista de nombres
// Muestra el nombre sorteado
function sortearAmigo() {
  let indice = obtenerAleatorio(0, nombresAmigos.length - 1);

  const li = document.createElement("LI");
  li.innerText = `Tu amigo secreto es ${nombresAmigos[indice]}`;
  resultado.appendChild(li);
}

// Esta función es un helper para obtener un número aleatorio
function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
