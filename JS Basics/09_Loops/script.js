for (let i = 0; i < 4; i++) {
    let a = "";

    for (let index = 0; index < 4; index++) {
       if(i%2===0){
        a += "X";
       } else {
        a += "O"
       }
        
    }
    console.log(a);
}

let sum = 0;
for (let count = 0; count <= 99; count+=2) {
    sum = sum + count;
     
}
console.log(sum);