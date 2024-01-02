// 1 - Number

console.log(typeof 2);
console.log(typeof 5.15);
console.log(typeof -127);

// 2 - Op. Aritméticas

console.log( 2 + 4 );
console.log( 10 - 3 );
console.log( 2 * 4 );
console.log( 6 / 2 );
console.log( 4+(2+6));

// 3 - Special Numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings

console.log("teste");
console.log(typeof "teste");
console.log(`testo`);
console.log('testo2');


// 5 - Símbolos especiais em String

console.log("Testando a \n quebra de linha");
console.log('Espaçamento \t de tab');

// 6 - Concatenação

console.log('Meu ' + "texto " + `combinado`);
console.log('Hello ' + `world`);

// 7 - Interpolação(Templete Strings)

console.log(`A soma de 2 + 2 é: ${2+2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean

console.log(true);
console.log(5 > 10);
console.log(10 > 5);
console.log(5 == 5);
console.log(10 != 5)
console.log(10 != 10);
console.log(typeof false);