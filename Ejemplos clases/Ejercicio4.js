const puntos = [12, 45, 23, 67, 34, 89, 90];
let suma = 0;
for (let i = 0; i < puntos.length; i++) {
    suma += puntos[i];
    console.log("El mayor puntaje es " + suma + "puntos");
}