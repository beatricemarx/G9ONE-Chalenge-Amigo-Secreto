//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    //função para adicionar Amigos na lista para sorteio
    //Mudança do nome da variável para armazenar a lista dos sorteados: de ListaAmigos para AmigosParaSorteio
    AmigosParaSorteio = document.querySelector("input").value;
    amigos.push(AmigosParaSorteio);
    exibirAmigos ();
    console.log(amigos);
    return AmigosParaSorteio; 
}
 
function exibirAmigos () {
    // função para exibir Nomes de Amigos Na tela
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = (amigos);
}

