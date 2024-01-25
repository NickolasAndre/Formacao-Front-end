// 1 - criando uma função

function minhaFuncao(){
    console.log("testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável");
}

minhaFuncaoEmVariavel()

function funcaoEmParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoEmParametro("Imprimindo alguma coisa");

funcaoEmParametro("Outra função");

function abc(){
    console.log("abcdef");
}

abc();

const casa = function(){
    console.log("casa2, casa3, casa4");
}

casa();

function carro(txt){
    console.log(`carros: ${txt}`);
}

carro("carro2, carro3, carro4");

carro("carro6, carro7, carro8");

// 2 - return

function soma(){
    console.log(5 + 10);
    return
}
soma();

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function somav(n1, n2){
    return n1 + n2;
}

const resultado = somav(a, b);
console.log(resultado);
console.log(somav(c, d));


const aa = 5;
const ab = 10;
const ac = 15;
const ad = 20;

function somaa(m1, m2){
    return m1 + m2;
}

const resultadoo = somaa(aa, ab);
console.log(resultadoo);


const q1 = 1;
const q2 = 2;


function somaq(v1, v2){
    return v1 + v2;
}
const resul = somaq(q1, q2);
console.log(resul);

// 3 - escopo da função

let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo()
console.log(`Y fora da função é: ${y}`);

// 4 - escopo aninhado

let m = 10;

function escopoAninhado(){
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40;

            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}
escopoAninhado()
console.log(m);


// 5 - arrow function

const testeArrow = () =>{
    console.log("Esta é uma arrow function");
}

testeArrow();

const adw = function www(){
    console.log("teste")
}

adw();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par")
        return
    }
    console.log("Impar")
}

parOuImpar(5);

parOuImpar(4);

// 6 - mais sobre arrow function

const raizQ = (x) =>{
    return x * x
}

console.log(raizQ(4));

const raizQ2 = (qq) => qq * qq;

console.log(raizQ2(2));
console.log(raizQ2(12));

const helloWorld = () => console.log("Hello World");

helloWorld();