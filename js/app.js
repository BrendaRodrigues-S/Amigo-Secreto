let amigos = [];

function adicionar() {
// Chamando o input de nome
    let amigo = document.getElementById('nome-amigo');
//Validando se o campo não está vazio 
    if(amigo.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }
// Verificando se o nome é igual
    if(amigos.includes(amigo.value)){
        alert('O nome já adicionado');
        return
    }
// Chamando a lista de amigos com os nomes chamados no input
    let lista = document.getElementById('lista-amigos');
//Dando valor ao array amigos 
    amigos.push(amigo.value);
//montando a lista de amigos  
    if(lista.textContent == ''){
         lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
   amigo.value = '';
}

function sortear() {
// Verificando a quantidade de amigos
    if( amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
// chamando a  função embaralha e montando a lista
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')

    for(let i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'     

        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'     
        }
        
    }
}

function embaralha(lista) {
    
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]]=[lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}




