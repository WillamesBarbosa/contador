var numeroAtualPegar = document.getElementById('numeroAtual');
var numeroAtual = 0;
var corBotao = document.getElementById('diminuir');


function incrementar(){
    numeroAtual = numeroAtual + 1;
    numeroAtualPegar.innerHTML = numeroAtual;

function decrementar(){
    if(numeroAtual === 0){
        numeroAtual = 0
        corBotao.style.backgroundColor = 'gray';
    }else{
        numeroAtual = numeroAtual - 1;
        numeroAtualPegar.innerHTML = numeroAtual;
        corBotao.style.backgroundColor = '#ff0043';
    }
}
