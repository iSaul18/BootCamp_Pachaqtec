const array = [];

array[0] = "Juan";
array[1] = "José";
array[2] = "Saul";
array[3] = "Angel";
array[4] = "Carlos";
array[0] = "Wilmer";

// Agrega al final del array
array.push("Pedro");

// Elimina el ultimo elemento del array
array.pop();

// Agrega al inicio del array
array.unshift("Luis");

// Elimina el primer elemento del array
array.shift();

console.log(array);

const frutas = ["Manzana", "Pera", "Naranja", "Sandia", "Coco"];
console.log(frutas[0]);
console.log(frutas.length);
const frutasCadena = frutas.join("");
console.log(frutasCadena);
console.log(frutas)
const corteFrutas = frutas.slice(1);
console.log(corteFrutas);
console.log(frutas);
const reverseFrutas = [...frutas].reverse();
console.log(reverseFrutas);
console.log(frutas);

// Destructuracion de arrays
const [ ,,a ] = frutas;
// console.log(pos0);
// console.log(pos1);
console.log(a)
