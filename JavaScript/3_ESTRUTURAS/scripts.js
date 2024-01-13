/*
// 1 - variáveis

let nome = "Nickolas";

console.log(nome);

nome = "Nickolas Andre";

console.log(nome);

const idade = 24;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis

let a = 10, b = 20, c = 30;

console.log(a, b, c);

// 3 - função prompt

//const age = prompt("Digite a sua idade:");

//console.log(`você tem ${age} anos.`);


// 4 - alert

//alert("testando");

//const z = 10;

//alert(`O número é ${z}`);

// 5 - math


console.log(Math.max(4,1,5,10));

console.log(Math.floor(6.12));

console.log(Math.ceil(6.53));

// 6 - console

console.log("teste!");

console.error("erro!");

console.warn("aviso!");


// 7 - if

const m = 10

if(m > 5){

    console.log("M é maior que 5!");

}

const user = "João"

if(user === "João"){
    
    console.log("Esse é o João!");

}

if(user === "Maria"){

    console.log("Essa é Maria")

}

console.log(user === "João", user === "Maria");

// 8 - else

const loggedIn = false

if(loggedIn === true){

    console.log("Está autenticado!");

} else {
    console.log("Não está autenticado!");
}


const q = 10;
const w = 15;

if(q > 5 && w > 20){
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - else if

if(1 > 2){
    console.log("Teste");
}else if(2 > 3){
    console.log("Teste");
}else if(5 > 3){
    console.log("Sim");
}

const userName = "Nick";
const userAge = 24;

if(userName === "José"){
    console.log("Bem vindo José");
}else if(userName === "Nick" && userAge === 24){
    console.log("certo!");
}else {
    console.log("Nenhuma condição foi aceita!");
}
*/

// 10 - while
/*
let p = 0

while(p < 5){
    console.log(`Repetindo${p}`)
   p = p + 1
}



let x = 10;

while(x >= 0){
    console.log(`Repetindo${x}`)
    x = x - 2;
}
*/

// 11 - do while

let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o --;
}while(o > 1);

