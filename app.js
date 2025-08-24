//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let listaAmigosSorteados = []
let amigoSorteado =[];

function adicionarAmigo() {
    //limpar informações da tela
    lista = document.getElementById("resultado");
    lista.innerHTML = "";
    
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
            limparCampoAmigos();
            console.log(amigos);
            return amigosParaSorteio;  
        }
    }
}
 
function exibirAmigos () {
    // função para exibir Nomes de Amigos Na tela
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //loop para inserir um Li a cada novo amigo criado
    amigos.forEach(item => {
        const novoLi = document.createElement("li");
        novoLi.textContent = item;
        lista.appendChild(novoLi);
        
    });
}

function limparCampoAmigos() {
    //função para limpar a tela depois de inserido o nome
    amigosParaSorteio = document.querySelector("input");
    amigosParaSorteio.value = "";   
}

function sortearAmigo(){
    //Se o tamanho do array Amigos for diferente da lista de Amigos Sorteados continuar o sorteio
    if (amigos!=""){
        //verificar se amigos não está vazio antes de realizar o sorteio
        if(amigos.length>listaAmigosSorteados.length){
            //função para sortear um nome: criar um índice aleatório e correlacionar com nome na mesma posição no array amigos
            let resultadoSorteio =  Math.floor(Math.random() * amigos.length);
                //Verificar se o número sorteado é repetido
                if(listaAmigosSorteados.includes (resultadoSorteio)){
                    return sortearAmigo();

                } else {
                    //se o número sorteado não for repetido seguir com o sorteio
                    listaAmigosSorteados.push(resultadoSorteio);
                    amigoSorteado = amigos[resultadoSorteio];
                    console.log(resultadoSorteio);
                    console.log(amigoSorteado);
                    console.log(listaAmigosSorteados);
                    exibirAmigosSorteado();
                }    
        } else {
            reiniciarSorteio()
        }
    } else {
        alert ("Nenhum nome foi adicionado. Para sortear, adicione o nome dos seus Amigos!");
    }    
}        

function exibirAmigosSorteado () {
    // função para exibir Nome do Amigo Sorteado Na tela
    let lista = document.getElementById("resultado");
    lista.innerHTML = (`O nome do(a) Amigo(a) sorteado(a) foi: ${amigoSorteado}`);
}

function reiniciarSorteio() {
    //função para reiniciar o Jogo
    if(amigos!= ""){
        amigos =[]
        listaAmigosSorteados =[]
        lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        lista = document.getElementById("resultado");
        lista.innerHTML = (`Jogo Reiniciado. Insira novos nomes!`);

    } else {
        alert ("Nenhum nome foi adicionado. Para jogar, adicione o nome dos seus Amigos!");
    }
}
