//console.log("Ejemplo de variables en JavaScript");

const nombre = "Bruno Ariel"; //el famoso string

const edad = 32; //el famoso dato number

//console.log(edad);

//console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años."); //La profe pone $(nombre) en vez de + nombre +, pero no me funciona

let contador = 0; 

contador = contador + 1; //contador += 1; //otra forma de escribirlo

//console.log(contador);

const Tienemascota = true; //el dato boolean puede ser true o false

//console.log(Tienemascota) //("¿" + nombre + " tiene mascota? " + Tienemascota) este ejemplo queda divino;


const días = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]; //el array es un conjunto de elementos y va siempre entre corchetes

//console.log(días); //console.log(días[2]); accedo al elemento miércoles que está en la posición 2 del array (empieza a contar desde el 0) y se escribe entre corchetes también.

const Entrena = { //el objeto es un conjunto de datos relacionados y va siempre entre llaves
    deporte: "funcional",
    dónde: "entremax",
    frecuencia: 3, //el número siempre sin comillas
}; //se cierran las comillas del objeto

//console.log(Entrena); 
//console.log("Qué deporte? " + Entrena.deporte) //accedo al valor "funcional" del objeto Entrena, usando un punto para separar el nombre del objeto y el nombre de la propiedad.

const texto = "Este es un texto de ejemplo para mostrar cómo funcionan las variables en JavaScript.";

console.log(texto.length); //muestra la cantidad de caracteres que tiene el texto
console.log(texto.toLocaleLowerCase()); //convierte todo el texto a minúsculas, sino es toUpperCase() para mayúsculas

