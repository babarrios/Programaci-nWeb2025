const producto = ["tornillo", "tuerca", "arandela", "mechas", "cable canal", "cables"];
const precio = [1.50, 1.50, 0.50, 7.50, 4.00, 3.00];
const disponible = [true, true, false, true, true, false];

for (let i = 0; i < producto.length; i++) { //literalmente es un bicle que dice que si i es menor a la cantidad de elementos del array producto, siga ejecutando el bloque de código dentro del for, y que vaya aumentando i en 1 en cada vuelta
    console.log(" El producto " + producto[i] + " cuesta $" + precio[i] + ". Está disponible? " + disponible[i]);
}