// 1 - arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista)
console.log(typeof lista)

const itens = ["nickolas", true, 1, 3.24, []];

console.log(itens);

const itens2 = [1, 4, 5, [6, 7, 8, 9], 10, 11];

console.log(itens2);

// Mais sobre Arrays

const arr = ["a", "b", "c ", "d"]

console.log(arr[3])


// propriedades

const number = [1, 2, 3, 4, 5, 6,];

console.log(number.length)
console.log(number["length"])
console.log(number.pop)

const myName = 'nico';

console.log(myName.length);

// métodos


const otherNumber = [1, 2, 3, 57];

const allNumber = number.concat(otherNumber);

console.log(allNumber);


const text = "Algum texto";

const text2 = " Complemento do texto";

const textTudo = text.concat(text2);

console.log(textTudo);

console.log(text.toUpperCase());

console.log(text.indexOf("u"));

// objetos

const person = {
    name: "nico",
    age: 25,
    job: "programador"
}

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.job);
console.log(person.job.length);
console.log(typeof person);

// criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: "vw",
    model: "tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km
console.log(car)