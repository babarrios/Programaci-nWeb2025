const pie = 10000000
const bicicleta  = 10000000
const colectivo = 30000
const auto = 10000000
const avion = 1000000

if (pie < bicicleta && pie < colectivo && pie < auto && pie < avion) {
    console.log("El medio de transporte más económico es ir a pie.")
} else if (bicicleta < colectivo && bicicleta < auto && bicicleta < avion) {
    console.log("El medio de transporte más económico es ir en bicicleta.")
} else if (colectivo < auto && colectivo < avion) { 
    console.log("El medio de transporte más económico es ir en colectivo.")
} else if (auto < avion) {
    console.log("El medio de transporte más económico es ir en auto.")
} else {
    console.log("El medio de transporte más económico es ir en avión.")
} 