document.addEventListener("DOMContentLoaded", function(){
    const input = document.querySelector("#add-item-input") // input para add o texto
    const button = document.querySelector(".add-item-button") // button pra add o texto 
    const lista = document.querySelector(".add-check") // a lista vai aparecer 
    const template = document.querySelector("#check") // o quadrado de todas as listas

    template.style.display= "none" // isso aqui faz o check ficar invisivel

    button.addEventListener("click", function() { // isso aqui faz o q for escrito ser add (button)
        const nomeProduto = input.value.trim()

        if (nomeProduto === ""){
            alert("Digite algum item carai!!") // se nao tiver valor vai dar um alerta na tela 
            return
        }

        const novoItem = template.cloneNode(true) // aqui vai criar uma copia do modelo
        novoItem.style.display = "flex" // aqui faz aparecer 
        novoItem.querySelector("h2").textContent = nomeProduto // aqui defini o nome do produto 

        lista.appendChild(novoItem) // aqui add o novoItem dentro da lista 
        input.value = "";

        //lixeira 

        const botaoRemover = novoItem.querySelector("#crash")

        botaoRemover.addEventListener("click", function(){
            novoItem.remove()
            alert(nomeProduto + "foi removido") // aqui remove o item
        })
    })  
})

//acho que é isso 


