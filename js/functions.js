var inputNum = document.getElementById('number');
var res = document.getElementById('res');
var ballArea = document.getElementById('ballArea');

var valores = []

//Verificando se o valor digitado é um número
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

//Verificando se o número já foi adicionado
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

//Função para adicionar
function adicionar() {
    //Verificando se o número é um número e se já foi adicionado
    if (isNumero(inputNum.value) && !inLista(inputNum.value, valores)) {
        valores.push(Number(inputNum.value))

        var ball = document.createElement('div');
        ball.setAttribute('class', 'ball')
        var ballNum = document.createElement('div')
        ballNum.setAttribute('class', 'num')
        var ballArea = document.getElementById('ballArea')

        ballNum.innerHTML += inputNum.value
        ball.appendChild(ballNum);
        ballArea.appendChild(ball)

        res.innerHTML = ''

        inputNum.value = ''
        inputNum.focus();

    } else {
        alert('[ERRO] Valor inválido ou já encontrado')
    }
}

//Função para resetar a lista de números
function resetar() {
    if (valores.length != 0) {
        valores.length = 0;
        ballArea.innerHTML = ''
        res.innerHTML = ''
    }
}

//Função para analisar os números
function analisar() {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0
    for (let pos in valores) {
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
        soma += valores[pos];
    }
    media = soma / tot;

    res.innerHTML = ''
    res.innerHTML += `Há no total <strong>${tot}</strong> números.<br>`
    res.innerHTML += `O maior número foi <strong>${maior}</strong>.<br>`
    res.innerHTML += `O menor número foi <strong>${menor}</strong>.<br>`
    res.innerHTML += `A soma dos números é igual a <strong>${soma}</strong>.<br>`
    res.innerHTML += `A média dos valores é igual a <strong>${media.toFixed(0)}</strong>`
}

//Para usar o botão enter como Submit
inputNum.addEventListener("keyup", function() {
    if (event.keyCode === 13) {
        document.getElementById('submit').click();
    }
})