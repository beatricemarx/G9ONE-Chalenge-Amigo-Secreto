//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    //função para adicionar Amigos na lista para sorteio
    //Mudança do nome da variável para armazenar a lista dos sorteados: de listaAmigos para amigosParaSorteio
    amigosParaSorteio = document.querySelector("input").value;
    
    //Validação = Não Aceitar campo vazio
    if(amigosParaSorteio === ""){
        alert ("Por favor insira um nome!");

    } else {
        if (amigosParaSorteio === " "){
            alert ("Por favor insira um nome!");
        } else {
            amigos.push(amigosParaSorteio);
            exibirAmigos ();
            console.log(amigos);
            return amigosParaSorteio; 
        }
    }
}
 
function exibirAmigos () {
    // função para exibir Nomes de Amigos Na tela
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = (amigos);
}

