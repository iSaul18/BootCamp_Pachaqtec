// Hoisting
saludar("Antes de declarar la funcion");

function saludar(nombre = 'Desconocido') {
  console.log("Hola",nombre);
}

saludar("Pedro");
saludar("Juan");
saludar();

const sumar = function(num1 = 0,num2 = 0) {
  console.log(num1 + num2);
}

sumar(4,5);
sumar(10,5);
sumar();

// Arrow functions
const restar = (num1 = 0, num2 = 0) => console.log(num1 - num2)
const saludar2 = nombre => console.log(nombre)

restar(10,5);
restar(7,5);
restar();

// saludar2("Pedro")

const multiplicar = (num1 = 0, num2 = 0) => {
  return num1 * num2;
}

const multiplicacion = multiplicar(10,5);
console.log(multiplicacion);