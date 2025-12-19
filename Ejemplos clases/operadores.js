//Operadores de comparación: 

//== igual a
//=== estrictamente igual a en tipo y valor
//!= diferente de
//> mayor que
//< menor que
//>= mayor o igual que
//<= menor o igual que

//Operadores lógicos:

//&& AND (y) el AND se usa por ej en un inicio de sesión, donde el usuario y la contraseña tienen que ser correctos para poder entrar
//|| OR (o)
//! NOT (no)

//else e if se pueden combinar para hacer estructuras condicionales más complejas

//const nombreUsuario = "Pablo";

//if( nombreUsuario == 'Bruno'){
//    console.log('¡Hola Bruno! Bienvenido de nuevo.');
//} else {
//    console.log('Usuario no reconocido.');
//}

//const num1 = 51;
//const num2 = 73;
//const num3 = 86;

//if (num1 > num2 && num1 > num3) {
//    console.log(num1 + " es el número más grande."); // si num1 es mayor que num2 y num3
//} else if (num2 > num3) {
//   console.log(num2 + " es el número más grande."); //si no es num1, pregunto si es num2
//} else {
//    console.log(num3 + " es el número más grande."); //si no es ni num1 ni num2, tiene que ser num3
//}


//BUCLES como el for.

//const frutas = ["manzana", "banana", "cereza", "durazno" , "uva"];

//for (let i = 0; i < frutas.length; i++) {
//    console.log("Tenemos " + frutas[i]); //accedo a cada elemento del array frutas usando el índice i, y el ++ para que vaya aumentando en cada vuelta del bucle
//}

const cantidades = [5, 10, 15, 20, 25];
let suma = 0;
for (let i = 0; i < cantidades.length; i++) {
    suma += cantidades[i]; //suma = suma + cantidades[i]; esto es lo mismo que la línea de arriba solo que sumando
}

console.log("La suma total es: " + suma + " frutas");