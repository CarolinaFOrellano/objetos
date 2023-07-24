/*Ejercicios:


Hacer una función que reciba un objeto e imprima por consola ’$Nombre, $Apellido’.

Ejemplo: 
INPUT: {
	nombre: ‘Leonel’,
	apellido: ‘Messi’,
	profesion: ‘futbolista’
}
OUTPUT: `Leonel, Messi`*/

function datos(){
    let infoMessi={
        nombre: "leonel",
        apellido: "messi",
        profesion: "futbolista"
    }
    console.log(infoMessi.nombre)
    console.log(infoMessi.apellido)
}
datos()

/*2- Hacer una función que reciba un objeto como parámetro y escriba la propiedad ‘color’, como rojo.
Ejemplo: 
INPUT: {
	marca: ‘fiat’,
	modelo: ‘uno’,
}
OUTPUT: {
	marca: ‘fiat’,
	modelo: ‘uno’,
	color: ‘rojo’
}
*/
let auto={
    marca: "fiat",
    modelo: "uno"
}
function agregarRojo(auto) {
    let res= {...auto, color: "rojo"}
    return res
}
console.log(agregarRojo(auto))

/*3- Definir la función presentarse()

const persona = { 
	nombre: "Juan", 
	edad: 30, 
presentarse: () => …
 };
 // Prueba del ejercicio 1 console.log(persona.presentarse()); // Salida esperada: "Hola, mi nombre es Juan y tengo 30 años."*/

 let persona = { 
    nombre: "Juan", 
    edad: 30,
    presentarse: presentarse 
  }
  function presentarse() {
    console.log("Hola, mi nombre es  " + this.nombre + " y tengo " + this.edad +  " años.");
  }


  console.log(persona.presentarse());


/* 4- Definir función ‘sumarPesos’ que recibe un array de objetos ‘autos’ y me devuelva la suma de todos los pesos.

Ej: let autos: [
	{marca: ‘fiat’, modelo: ‘uno’, peso:1200},
	{marca: ‘toyota’, modelo: ‘hilux’, peso:2000},
	{marca: ‘ford’, modelo: ‘fiest’, peso:1300},
]

	OUTPUT: sumarPesos(autos) // 4500 */

    let autos= [
    {marca: "fiat", modelo: "uno", peso:1200},
    {marca: "toyota", modelo: "hilux", peso:2000},
    {marca: "ford", modelo: "fiest", peso:1300}
    ]

function sumarPesos(autos) {
    return autos.reduce((total, auto) => total + auto.peso, 0);
  }

console.log(sumarPesos(autos));


  
