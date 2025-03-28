// SNACK 1
// Definisco l'array di oggetti
const bikes = [
    {
        name: `Velociter X3`,
        weight: 8.5,
    },
    {
        name: `Tornado Carbon S1`,
        weight: 7.2,
    },
    {
        name: `UrbanGlide Pro`,
        weight: 11.3,
    },
    {
        name: `Alpine Storm MTB`,
        weight: 14.7,
    },
    {
        name: `EcoRide City`,
        weight: 9.8,
    },
]

// Definizione delle variabili necessarie
let minWeight = bikes[0].weight;
let lighter

// Ciclo l'array per recuperare l'oggetto più leggero
for (i = 0; i < bikes.length; i++){
    if (minWeight > bikes[i].weight){
        minWeight = bikes[i].weight;
        lighter = bikes[i];
    }
}

console.log(lighter); // Stampo il risultato

//----------------------------------------------------------