/*

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


const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2)

// conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

console.log(Object.keys(car));

console.log(Object.entries(car));

// mutação

const a = {
    name: "nick"
};

const b = a;

console.log(a);
console.log(b);

a.age = 25;

console.log(b);

// loop em array

const users = ["Nickolas", "Andre", "Paulo", "Pedro"];

for(let i =  0; i < users.length ; i++ ){
    console.log(i);
    console.log(`Listando o usuário ${users[i]}`);
}

// push e pop

const array = ["a", "b","c"]

array.push("d");
console.log(array);

array.pop();
console.log(array);

const itemRemovido = array.pop();

console.log(array);

array.push("z","x","y")

console.log(array);


// shift e unshift

const itemadd = ["aa","bb","cc"]

itemadd.unshift("aaa");
console.log(itemadd);

itemadd.shift();
console.log(itemadd);

const latters = ["a","b","c"]

const latter = latters.shift();
console.log(latter);
console.log(latters);

latters.unshift("P","Q","Z");
latters.unshift("Z");
console.log(latters);

// indexOf e lastIndexOf

const myElement = ["Morango","Uva","Laranja","Abacate", "Pêra", "Abacate"];

console.log(myElement.indexOf("Laranja"));
console.log(myElement[2]);

console.log(myElement[myElement.indexOf("Laranja")]);

console.log(myElement.lastIndexOf("Abacate"))



// slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(testeSlice);

console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(2);

console.log(subArray3);

*/

// forEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) =>{
    console.log(`o número é ${numero}`)
});


const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) =>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// includes

const brands = ["BMW", "VW", "FIAT"];

console.log(brands.includes("FIAT"));

if(brands.includes("FIAT")){
    console.log("tem carros da FIAT!")
} else{
    console.log("Não tem carros da FIAT!")
}