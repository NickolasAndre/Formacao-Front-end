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