//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigoSorteado =[]

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
            limparCampoAmigos()
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

function limparCampoAmigos() {
    //função para limpar a tela depois de inserido o nome
    amigosParaSorteio = document.querySelector("input");
    amigosParaSorteio.value = "";   
}

function sortearAmigo(){
    
    //verificar se amigos não está vazio antes de realizar o sorteio
    if(amigos!= ""){
        //função para sortear um nome: criar um índice aleatório e correlacionar com nome na mesma posição no array amigos
        let resultadoSorteio =  Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[resultadoSorteio];
        console.log(resultadoSorteio);
        console.log(amigoSorteado);
        exibirAmigosSorteado();

    } else {
        alert ("Nenhum nome foi adicionado. Para sortear, adicione o nome dos seus Amigos!")
    }
}

function exibirAmigosSorteado () {
    // função para exibir Nome do Amigo Sorteado Na tela
    let lista = document.getElementById("resultado");
    lista.innerHTML = (`O nome do(a) Amigo(a) sorteado(a) foi: ${amigoSorteado}`);
}
