

// Erstelle zwei Zufallszahl zwischen 0 und 100
let random = Math.random() * 100;
let random2 = Math.random() * 100;
let randomasInteger = Math.round(random);
let randomasInteger2 = Math.round(random2);

console.log(randomasInteger);
console.log(randomasInteger2);
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if (randomasInteger<randomasInteger2&& randomasInteger < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if (randomasInteger<30 || randomasInteger2< 30) {
    console.log("Eine der beiden ist kleiner als 30");
}
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
if (randomasInteger<50 && randomasInteger2!==50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}

