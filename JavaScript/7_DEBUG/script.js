// 1 - strict

"use strict";

//opa = "teste";

const opa = "teste"

console.log(opa);

//delete [].length; 

// 2 - console.log

let a = 1;
let b = 2;

if(a == 1 ){
    a = b + 2
}

console.log(a)

for( let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}

// 3 - debugger

let c = 1;
let d = 2;

if(c == 1){
    c = d + 2
}

//debugger;

for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("Executou o loop");

//debugger

if (c > 25){
    c = 25;
}