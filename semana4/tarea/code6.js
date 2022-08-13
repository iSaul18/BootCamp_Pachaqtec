// Cree una función que tome una serie de letras y las combine en palabras en una oración.

// La matriz se formateará así:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]

// La función debe combinar todas las letras indexadas 0th para crear la palabra 'solo', todas las letras indexadas 1st para crear la palabra 'live', etc.

// Las palabras más cortas tendrán una cadena vacía en el lugar una vez que la palabra ya se haya mapeado (vea el último elemento en el último elemento de la matriz).

const letras = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

const mitocondrias = [
  ["T", "M", "i", "t", "p", "o", "t", "c"],
  ["h", "i", "s", "h", "o", "f", "h", "e"],
  ["e", "t", "", "e", "w", "", "e", "l"],
  ["", "o", "", "", "e", "", "", "l"],
  ["", "c", "", "", "r", "", "", ""],
  ["", "h", "", "", "h", "", "", ""],
  ["", "o", "", "", "o", "", "", ""],
  ["", "n", "", "", "u", "", "", ""],
  ["", "d", "", "", "s", "", "", ""],
  ["", "r", "", "", "e", "", "", ""],
  ["", "i", "", "", "", "", "", ""],
  ["", "a", "", "", "", "", "", ""],
];

const palabrasGenerador = (arr) => {
  let superArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let o = 0; o < arr[i].length; o++) {
      if (o === arr[i].length - 1) {
        superArray.push(arr[o][i], " ");
      } else {
        superArray.push(arr[o][i]);
      }
    }
  }

  superArray = superArray.join("").trim();
  return superArray;
};

// console.log(palabrasGenerador(letras));
console.log(palabrasGenerador(mitocondrias));

// letras[0][0], [1][0], [2, 0], [3, 0], [4, 0];

// [0, 1], [1, 1], [2, 1], [3, 1], [4, 1];
