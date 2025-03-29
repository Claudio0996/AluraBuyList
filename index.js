import {construirElemento} from "./scripts/criarItem.js"


const button = document.getElementById("adicionar-item");
const list = document.getElementById("lista-de-compras");

let contador = 1;

function toggleClasse(elemento){
    if(elemento.style.textDecoration === ""){
        elemento.style.textDecoration = "line-through";
        return;
    }
    elemento.style.textDecoration = "";
}

function riscarItem(item){
    toggleClasse(item.nextElementSibling);
    toggleClasse(item.parentElement.nextElementSibling);
}


button.addEventListener("click", (event)=>{
    event.preventDefault();

    if(event.target.previousElementSibling.value === ""){
        return
    }
    
    list.appendChild(construirElemento(contador));

});

list.addEventListener("click", (event)=>{
    riscarItem(event.target);
})


