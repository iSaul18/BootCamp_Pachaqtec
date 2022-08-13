"user strict";

const palabra = "hola como estas";

// const hastag = (string) => {
//   let container = [];
//   let cortar = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     const elemento = string[i];

//     if (elemento.length === 0) {
//       elemento[0].toUpperCase();

//       container.push(elemento[0]);
//     } else {
//       container.push(elemento);
//     }
//   }
//   container.join(" ");
//   return "#" + container;
// };

// console.log(hastag(palabra));

function generateHashtag(str) {
  if (!str || str.length > 140) return false;
  let nombres = str.trim().split(" ").join(""),
    otherArray = [],
    content;
  for (let i = 0; i < nombres.length; i++) {
    content = nombres[i][0].toUpperCase() + nombres[i].slice(1);
    otherArray.push(content);
  }
  let solution = otherArray.join("");

  const solutions = "#" + solution;
  return solution.length < 140 ? solutions : false;
}

// const solutions = '#' + solution;
// return solution.length < 140 ? solutions : false;
console.log(generateHashtag("hola como estas"));
