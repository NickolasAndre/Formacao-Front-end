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