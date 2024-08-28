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