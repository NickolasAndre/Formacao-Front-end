// 1 - adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou aqui!")
})

// 2 - removendo eventos

const segundoBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Teste");
}

segundoBtn.addEventListener("click", imprimirMensagem);

const terBtn = document.querySelector("#other-btn");

terBtn.addEventListener("click", () =>{
    console.log("Evento removido")
    segundoBtn.removeEventListener("click", imprimirMensagem)
})

const att = document.querySelector("#att");

function attimprimir(){
    console.log("testeeeee");
}

att.addEventListener("click", attimprimir);

const ate = document.querySelector("#ate");

ate.addEventListener("click", () =>{
    console.log("removeu");
    att.removeEventListener("click", attimprimir)
})

// 3 - argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) =>{
    console.log(event)
    console.log(event.target)
    console.log(event.pointerType)
})

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () =>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) =>{
    e.stopPropagation()
    console.log("evento 2")
})

// 5 - removendo evento padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("removeu o link")
})


// 6 - eventos de tecla

document.addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla: ${e.key}`)
})

document.addEventListener("keydown", (e) =>{
    console.log(`Apertou a tecla: ${e.key}`)
})

// 7 - events de mouse

const mouseEnvents = document.querySelector("#mouse");

mouseEnvents.addEventListener("mousedown", () =>{
    console.log("Pressionou o botão")
});

mouseEnvents.addEventListener("mouseup", () =>{
    console.log("Soltou o botão")
})

mouseEnvents.addEventListener("dbclick", () =>{
    console.log("dbclick")
})

// 8 - movimento do mouse
/*
document.addEventListener("mousemove", (e) =>{
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo y: ${e.y}`)
})
*/

// 9 - eventos por scroll

window.addEventListener("scroll", (e) =>{
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

// 10 - evento de focus/blur

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) =>{
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) =>{
    console.log("Saiu do input")
})

// 11 - evento de carregamento

window.addEventListener("load", () =>{
    console.log("A página carregou!")
});

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault()
   
})