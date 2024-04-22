const resultado =document.querySelector('.result');
const igual = document.querySelector('.igual');

function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = ' ';
}

function backspace(){
    if(resultado.textContent){ 
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirma(){
    if(resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML) //o método eval pega os valores que estão no id resultado (p) na tela (innerHTML) e faz o cálculo com base no valor que está contido nele
    }
}

function raiz(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = Math.sqrt(resultado.innerHTML);
    }
}

function exponencial(){
    var base = resultado.innerHTML;

    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = base * base;
    }

}

function porcentagem(){
    var base = eval(resultado.innerHTML)

    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = base / 100;
    }
}

function pi(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML =  Math.PI * resultado.innerHTML;
    }
}

function fatorial(){
    var base = document.getElementById('resultado').innerHTML;
    if(base != 'Erro' && base != 0){
        var valor = 1;
        for (var i=base; i > 1; i--){
            valor = valor * i;
        }
        document.getElementById('resultado').innerHTML = valor;
    }
}


