
function calcular(){
    const calcular = Number(document.getElementById("x").value);
    let resultado= calcular * 2
    document.getElementById("calcular").innerHTML = 'Seu número 100% a mais é:  ' + resultado;
}

function venda(){
    //A linha debaixo obtém o valor do input que possui o id custo
    const calcular = Number(document.getElementById("custo").value);
    //A linha debaixo calcula-se 50% a mais do valor inserido
    let resultado = calcular * 1.5
    //A linha debaixo escreve o resultado na tela onde possui um elemento com id valorvenda
    document.getElementById("valorvenda").innerHTML = 'Seu valor para revenda é: ' + resultado; 
}

function retorno(){
    const calcular = Number(document.getElementById("investimento").value);
    let resultado = calcular - calcular * 0.7
    document.getElementById("rendimento").innerHTML = 'Seu rendimento mensal será: ' + resultado; 
}

function soma(){
    const calcular = Number(document.getElementById("salario").value);
    let resultado = calcular + calcular * 0.15
    document.getElementById("bonus").innerHTML = 'Seu salário com bonus fica em: R$' + resultado;
}

function promocao(){
    const calcular = Number(document.getElementById("preco").value);
    let resultado = calcular - calcular * 0.07
    document.getElementById("reducao").innerHTML = 'O valor do produto com desconto fica: R$' + resultado;
}