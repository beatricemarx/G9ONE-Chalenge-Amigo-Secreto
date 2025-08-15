//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    //função para adicionar Amigos na lista para sorteio

    listaAmigos = document.querySelector("input").value;
    amigos.push(listaAmigos)
    console.log(amigos)
    return listaAmigos
}


//console.log(amigos);
