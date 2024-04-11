let lessons = [5, 6, 4, 5, 4];
let lessonTime = 45;

let totalLessons = lessons.reduce((total, current) => total + current, 0);
let totalMinutes = totalLessons * lessonTime;
console.log(`Paskaitų skaičius per savaitę - ${totalLessons}. Tai sudaro ${totalMinutes} minučių.`);

let cupsToPack = 7;
let fullBoxes = Math.floor(cupsToPack / 3);
let remainingCups = cupsToPack % 3;
console.log(`Pilnų dėžučių skaičius: ${fullBoxes}. Nesupakuotų puodelių skaičius: ${remainingCups}.`);

let wallLength = 4;
let wallHeight = 3;
let brickLength = 20;
let brickHeight = 10;
let brickPrice = 0.5;
let bricksNeeded = (wallLength * 100 / brickLength) * (wallHeight * 100 / brickHeight);
let totalPrice = bricksNeeded * brickPrice;
console.log(`Plytų kiekis ${bricksNeeded}. Plytos kainuos ${totalPrice.toFixed(2)} Eur.`);

let tunnelLength = 264;
let carSpeed = 60;
let timeInSeconds = (tunnelLength / (carSpeed * 1000 / 3600)).toFixed(2);
console.log(`Automobilis tunelį pravažiuos per ${timeInSeconds} s.`);

let fishInTank = 5;
let fishToAdd = 3;
let days = 3;
let totalFish = fishInTank + fishToAdd * days;
console.log(`Po ${days} dienų akvariume gyvens ${totalFish} žuvų.`);

let heights = [167, 134, 145, 156, 155, 176];
let averageHeight = heights.reduce((total, current) => total + current, 0) / heights.length;
console.log(`Eglutės aukščio vidurkis: ${averageHeight.toFixed(1)} cm`);

let runners = [22, 20, 25, 25];
let minTime = Math.min(...runners);
let betterThanAverage = minTime - (runners.reduce((total, current) => total + current, 0) / runners.length);
console.log(`Greičiausio bėgiko laikas: ${minTime} sek.. Jis buvo: ${betterThanAverage} sek geresnis už vidurkį.`);

let tankCapacity = 112;
let fuelConsumption = 11;
let travelDays = Math.ceil(tankCapacity / (2 * fuelConsumption));
console.log(`Keliauti bus galima ${travelDays} dienas.`);

let buses = 2;
let busData = [
    { time: 110, passengers: 17 },
    { time: 120, passengers: 25 }
];
let totalPassengers = busData.reduce((total, current) => total + current.passengers, 0);
let averageTime = Math.round(busData.reduce((total, current) => total + current.time, 0) / buses);
let busesUnder10 = busData.filter(bus => bus.passengers < 10).length;
console.log(`Bendrai pervežtų keleivių skaičius = ${totalPassengers}. Vidutinis sugaištas važiavimo laikas (min.): ${averageTime}. Autobusų skaičius (keleiviai < 10): ${busesUnder10}.`);

let p = 5, pz = 50, a = 3, az = 45, k = 3, t = 5;
let m = p * pz + a * az;
let c = m % 100;
m = Math.floor(m / 100);
let v = m * 100 + c;
v = Math.round((v / (t * 60)) * 100) / 100;
console.log(`${m} ${c} ${v}`);
