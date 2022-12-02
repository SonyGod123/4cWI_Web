// Erstelle eine Zufallszahl zwischen 5 und 10
let max = 10;
let min = 5;
let randomNumber = (Math.random() * (max - min)) + min;
let randomasInteger = Math.round(randomNumber);
console.log(randomasInteger);

switch (randomasInteger) {
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 10:
        console.log("Ten");
        break;
    default:
        console.log("other");
}
// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.
