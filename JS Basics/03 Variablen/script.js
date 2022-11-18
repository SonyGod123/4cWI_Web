 // Erstelle eine Variable banana mit dem Wert "Banane"
 let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleweight = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaweight = 0.22;
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
console.log("Number of " + apple + ":" + " 8" + " Price: " + ((applePricePerKilo/(applePricePerKilo / appleweight)))*8);
// Preis von 17 Bananen
console.log("Number of " + banana + ":" + " 17" + " Price: " + ((bananaPricePerKilo/(applePricePerKilo / appleweight)*17)));
// Preis von 1 Tonne Äpfel
console.log("Price of one ton of apples: " + (applePricePerKilo * 1000));
// Preis von 1 Tonne Bananen
console.log("Price of one ton of bananas: " + (bananaPricePerKilo * 1000));