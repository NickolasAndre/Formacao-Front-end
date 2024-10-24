// 1 - movendo-se pelo DOM

/*console.log(document.body);

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)
*/
// 2 - selecionando por tag

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando por id

const title = document.getElementById('title');

console.log(title);

// 4 - selecionando por classe

const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando por CSS

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

// 6 - insertBefore

const p = document.createElement("p")

console.log(p);

const header = title.parentElement

console.log(header);

header.insertBefore(p, title)

// 7 - appendchild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

const navUl = document.querySelector("nav");

const ul = document.createElement("ul");

navUl.appendChild(ul);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo Título!"

header.replaceChild(h2, title)

const navA = document.createElement("li");

navA.textContent = "oi";

navUl.replaceChild(navA, ul)