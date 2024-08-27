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