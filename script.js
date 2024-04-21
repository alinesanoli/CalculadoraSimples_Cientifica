const resultado =document.querySelector('.result');
const igual = document.querySelector('.igual');

function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = ' ';
}

function backspace(){
    if(resultado.textContent){ //vendo se tem algo dentro do resultado{
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirma(){
    if(resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML) //o método eval pega os valores que estão no id resultado (p) na tela (innerHTML) e faz o calculo utilizando os valores que estão nele
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
    
}