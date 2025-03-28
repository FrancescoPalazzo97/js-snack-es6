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

// SNACK 2
// Definisco l'array di oggetti
const clubs = [
    { 
        name: "FC Solaris", 
        goals: 0, 
        foulsReceived: 0, 
    },
    { 
        name: "United Wolves", 
        goals: 0, 
        foulsReceived: 0, 

    },
    { 
        name: "Thunder FC", 
        goals: 0, 
        foulsReceived: 0, 

    },
    { 
        name: "Neon Riders", 
        goals: 0, 
        foulsReceived: 0, 

    },
    { 
        name: "Skyline Athletic", 
        goals: 0, 
        foulsReceived: 0, 

    }
];

// Definisco le variabili necessarie
let clubsFouls;

// Functions
const randomNumber = () => parseInt(Math.floor(Math.random() * 50) + 1);

const remap = (arr) => {
    let newArr = arr.map(item => {
        return {name: item.name, foulsReceived: item.foulsReceived};
    })
    return newArr;
}

// Corpo del programma
for (i = 0; i < clubs.length; i++){
    clubs[i].goals = randomNumber();
    clubs[i].foulsReceived = randomNumber();
}

clubsFouls = remap(clubs)
console.log(clubs);
console.log(clubsFouls);

