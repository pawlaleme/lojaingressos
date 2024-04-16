function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
   
    if (ingresso == 'pista'){ 
        comprarPista(qtd);
    } else if (ingresso == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade indisponivel, por favor informar uma quantidade menor');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Sua compra foi realizada com sucesso!');
    }

}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponivel, por favor informar uma quantidade menor');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Sua compra foi realizada com sucesso!');
    }

}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior) {
        alert('Quantidade indisponivel, por favor informar uma quantidade menor');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Sua compra foi realizada com sucesso!');
    }

}