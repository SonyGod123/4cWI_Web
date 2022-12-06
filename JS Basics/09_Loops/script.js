for (let i = 0; i < 4; i++) {
    let a = "";

    for (let index = 0; index < 4; index++) {
       if(i%2===0){
        a += "X";
       } else {
        a += "O"
       }
        console.log(a);
    }
    
}