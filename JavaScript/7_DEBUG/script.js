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

// tratamento de dados

function checkNumber(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto!");
        return;
    }
    console.log("Valor correto!");
    return result
}

checkNumber(4);
checkNumber("5");
checkNumber({});
checkNumber("teste");

// 5 - exceptions

let x = 10;

if(x != 11){
//    throw new Error("O valor de X não pode ser diferente de 11!");
}

// 6 - try catch

try{
    const soma = x + y
} catch(error){
    console.log(`Erro no programa: ${error}`)
}

// 7 - finally

try{
    const value = checkNumber("asd")

    if(!value){
        throw new Error("Valores inválidos!")
    }
}catch(error){
    console.log(`aconteceu um problema: ${error}`)
}finally{
    console.log("O código foi executado!")
}

// 8 - assertion

function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos");
    }else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}
//checkArray([])
checkArray([1,2,3,4])