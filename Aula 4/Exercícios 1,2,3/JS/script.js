function salario() {
    const calcular = Number(document.getElementById("x").value);

    if (calcular >= 3000)
        document.getElementById("plano").innerHTML = 'Oferecer plano Alfa'
    else
        document.getElementById("plano").innerHTML = 'Oferecer plano Beta';

}

function colesterol() {
    const calcular = Number(document.getElementById("taxa").value);

    if (calcular <= 180)
        document.getElementById("orientacao").innerHTML = 'Saúde OK!'
    else 
        document.getElementById("orientacao").innerHTML = 'Vamos procurar uma ajuda médica?';
}

function comissao(){
    const calcular= Number(document.getElementById("vendas").value);
    
    if (calcular >=100000000)
        document.getElementById("valor").innerHTML = calcular * 0.04

    else 
        document.getElementById("valor").innerHTML = calcular * 0.02
}

