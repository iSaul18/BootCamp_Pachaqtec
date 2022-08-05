// const personaNombre = "Juan";
// const personaEdad = 30;
// const personaCiudad = "Lima";
// const personaEstaCasado = true;

const persona1 = {
  nombre:"Juan",
  edad:30,
  ciudad:"Lima",
  estaCasado:true,
}

// console.log(persona.nombre);
// console.log(persona["nombre"]);
// console.log(persona.edad);
// console.log(persona["edad"]);
// console.log(persona.ciudad);
// console.log(persona["ciudad"]);
// console.log(persona.estaCasado);
// console.log(persona["estaCasado"]);
persona1.email = "correo@correo.com"
// persona1.edad = 25;
// delete persona.estaCasado
console.log(persona1);

// Destructuracion de objetos
const { nombre, edad, ciudad, estaCasado } = persona1;
console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(estaCasado);

// Spread operator
const persona2 = {
  ...persona1,
  pais:"Perú",
}
// console.log(persona2);
// const persona3 = persona2;
const persona3 = {...persona2};

persona3.edad = 40;

// console.log(persona3);

//Metodos de objetos
console.log(Object.keys(persona1))
console.log(Object.values(persona1))
console.log(Object.entries(persona1))
// Object.freeze(persona1);
// Object.seal(persona1);
persona1.madre = "María";
persona1.ciudad = "Tumbes";
console.log(persona1);

const persona4 = Object.assign(persona2,{ciudad:'Arequipa'});
console.log(persona2);
console.log(persona4);

console.log(Object.isFrozen(persona1));





