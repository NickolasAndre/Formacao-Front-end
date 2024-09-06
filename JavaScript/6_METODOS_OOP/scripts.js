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

// mais sobre classes

class caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new caminhao(6, "vermelho");

console.log(scania);

scania.descreverCaminhao();

caminhao.motor = 4;

const c2 = new caminhao(4, "preta");

console.log(c2);

console.log(c2.motor);

caminhao.prototype.motor = 4.0;

const c3 = new  caminhao(6, "azul")

console.log(c3)

// 11 - override

class humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const nickolas = new humano("nickolas", 25);

console.log(nickolas);

humano.prototype.idade = "Não definida";

console.log(nickolas.idade);

console.log(humano.prototype.idade);

*/

// 12 - symbols

class Aviao{
    constructor(marca, turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();

const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boing = new Aviao("boing", 2);

console.log(boing);

console.log(boing[asas]);

console.log(boing[pilotos]);

// 13 - getter e setter

class post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPsot = new post("Algum post", "É um post sobre programação");

console.log(myPsot);

console.log(myPsot.exibirTitulo);

myPsot.adicionarTags = "programação, javascript, js";

console.log(myPsot)

// 14 - Herança

class mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class lobo extends mamifero {
    constructor(patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new lobo(4, "shark");

console.log(shark)