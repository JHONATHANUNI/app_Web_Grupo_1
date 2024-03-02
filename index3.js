// 1. Definicion de variables 
var nombre = "Jhonathan uni "; //Variable de tipo string en var es para crear variables globales
let apellido = "Uni Sisa"; // palabra reservada let , define variables 
const numero = "15"; // variable numero se puede usar con comillas "" o ''
let numeroDos = 2.36; // numeros reales o Double 
let datoBolleano = false; // para definir un dato boleano
let pares = [2, 4, 6, 8, 10];// para crear un array de numeros o int
let jobs = ['libros', 'Deportes', 'Cine']; // para crear un array de string
console.log(pares[2]); // linea para ver la posicion 2 del array pares
let persona = {
    nombre: 'juan',
    apellido: 'perez',              // de esta forma creamos un objeto 
    edad: '28',
    jobs: ['libros', 'Dormir'],
    otrosDatos: {
        telefono: 1234,
        email: 'test@test.com'
    }
};
console.log(persona['nombre'], persona.nombre);         // para leer el nombre de la persoan del objeto 
console.log(persona.jobs[1], persona.otrosDatos.email) // leer email de la persona
const personas = [   //array de persona
    { nombres: 'persona 1', edad: 17, categoria: 'a' },
    { nombres: 'persona 2', edad: 27, categoria: 'b' },
    { nombres: 'persona 3', edad: 40, categoria: 'c' },
    { nombres: 'persona 4', edad: 30, categoria: 'a' },
    { nombres: 'persona 5', edad: 15, categoria: 'b' },
    { nombres: 'persona 6', edad: 18, categoria: 'c' },

];

console.log('for------------');
for (let index = 0; index <= personas.length - 1; index++) {
    console.log(persona[index].nombres);
}
console.log('for------------');
for (let index in personas) {
    console.log(persona[index].nombres);
}
console.log('for------------');
for (let item of personas) {
    console.log(item.nombres);
}
console.log('while-------------');
let index = 0
while (index < personas.length) {
    console.log(personas[index].nombres);
    index++;
}
console.log('do while------------------------');
index = 0;
do {
    console.log(personas[index].nombres);
} while (index < personas.length);


console.log('foreach----------------') // foreach Estudiar todos los siclos
personas.forEach((item, index) => {
    console.log(index, item.nombres);
});

// si se cumple o si no se cumple if else , siclo 
let m = '12';
if (m == 12) {
    console.log(m, 'ok');

} else {
    console.log(m, 'not');
}


/**
 * ! negacion
 *  == igual valor
 * === igual valor tipo
 * <
 * <=
 * >=
 * 
 * && and
 * || or
 */