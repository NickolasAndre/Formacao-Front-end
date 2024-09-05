/*
// 1 - Métodos

const animal = {
    nome: "bob",

    nome2: "galinha",

    latir: function(){
        console.log("au au");
    }
};

console.log(animal);

console.log(animal.nome2);

animal.latir();

// 2 - aprofundando em métodos

const pessoa = {
    nome: "nickolas",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Andre");

console.log(pessoa.getNome())

// 3 - prototype

const texto = "asd";

console.log(Object.getPrototypeOf(texto));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const ar = [];

console.log(Object.getPrototypeOf(ar));

// 4 - mais sobre prototype

const myObject = {
    a: "b"
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject);

console.log(myObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

console.log(bulldog.patas);

const pit = Object.create(cachorro);

pit.raca = "pit";

console.log(pit);

console.log(pit.patas);



// função como classe - função construtora

function criarCachorro(nome, raca) {


    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro

}

const bob = criarCachorro("bob", "vira lata");

console.log(bob);

const dog = criarCachorro("mel", "bulldog");

console.log(dog);

const paco = criarCachorro("bola", "pit");

console.log(paco);

*/
// funcoes como classe

function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("neve", "husky");

console.log(husky);

const viraLata = new Cachorro("ovo", "vira-lata");

console.log(viraLata);

const bulldog = new Cachorro("bob", "bulldog");

console.log(bulldog);

// 8 - metodos na funcao construtora

Cachorro.prototype.uivar = function(){
    console.log("Auuu!");

}

husky.uivar();

// 9 - classes es6

class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "pit");

console.log(jeff);

const tibia = new CachorroClasse("tibia", "dog");

console.log(tibia)