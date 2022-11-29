let random = Math.random() * 1000;
let randomasInteger = Math.round(random);

console.log(randomasInteger);

if (randomasInteger>500) {
    console.log("Bigger than 500");
}

//Aufgabe

//Wenn größer als 800
if (randomasInteger>800){
    console.log("Number is bigger than 800");
}
//Wenn zwischen 500 und 800
if (randomasInteger>=500 && randomasInteger<=800) {
    console.log("The Number is between 500 and 800");
}
//wenn zwischen 200 und 500
if (randomasInteger>=200 && randomasInteger<=500) {
    console.log("The Number is between 200 and 500");
}
//wenn zwischen 0 und 200
if (randomasInteger>=0 && randomasInteger<=200) {
    console.log("The Number is between 0 and 200");
}