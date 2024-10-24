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

navUl.replaceChild(navA, ul);

// 9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

//----------------------------

const myText2 = document.createTextNode("Agora mais um texto!")

const h4 = document.createElement("h4");

h4.appendChild(myText2);

console.log(h4)

navLinks.appendChild(h4)

//----------------

const footer = document.getElementsByTagName("footer")[0]

console.log(footer)

const ah4 = document.createElement("h4")

const myTextFooter = document.createTextNode("texto no footer");

ah4.appendChild(myTextFooter)

console.log(ah4)

footer.appendChild(ah4)