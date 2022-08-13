// Dada una matriz de enteros.

// Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.

// Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

// Ejemplo
// Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65].

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const calcMaxMin = (number) => {
  let sumaPositiva = [];
  let sumaNegativa = 0;

  if (number) {
    for (let i = 0; i < number.length; i++) {
      number[i] > 0;
      if (number[i] > 0) {
        sumaPositiva.push(number[i]);
      } else {
        sumaNegativa += number[i];
      }
    }
    return [sumaPositiva.length, sumaNegativa];
  } else {
    return [];
  }
};

console.log("Ejercicio 2 ---------------");
console.log(calcMaxMin(numbers));
