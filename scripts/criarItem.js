import getData from "./pegarData.js";

const inputItem = document.getElementById("input-item");

export function construirElemento(cont){

    const li = document.createElement("li");
    const div = document.createElement("div");
    const inputCheckbox = document.createElement("input");
    const text = document.createElement("p");
    const data = document.createElement("p");

    div.classList.add("lista-item-container");

    inputCheckbox.type = "checkbox";
    inputCheckbox.id = `checkbox-${cont++}`;
   
    text.innerText = inputItem.value;

    data.classList.add("texto-data");
    data.innerText = getData();

    div.appendChild(inputCheckbox);
    div.appendChild(text);
    li.appendChild(div);
    li.appendChild(data);


    return li;

}
