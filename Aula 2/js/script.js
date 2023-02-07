function somar(){
    const x = Number(document.getElementById("x").value);
    const y = Number(document.getElementById("y").value);
    let resultado= x+y;
    alert(resultado);
}

function elevar(){
    const xelevado = Number(document.getElementById("x.elevado").value);
    let resultado= xelevado*xelevado;
    document.getElementById("Resultadoquadrado").innerHTML = 'Resultado obtido ' + resultado;
}

function comprimento(){
    const nome = document.getElementById("comprimento").value;
    document.getElementById("saudacao").innerHTML = 'Seja bem vindo! ' + nome ;
}

function soma(){
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    let resultado= n1+n2; 
    document.getElementById("resultado").innerHTML = 'O resultado é ' + resultado;
}

function menos(){
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    let resultado= n1-n2; 
    document.getElementById("resultado").innerHTML = 'O resultado é ' + resultado;
}

function vezes(){
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    let resultado= n1*n2; 
    document.getElementById("resultado").innerHTML = 'O resultado é ' + resultado;
}

function dividir(){
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    let resultado= n1/n2; 
    document.getElementById("resultado").innerHTML = 'O resultado é ' + resultado;
}

function idade(){
    const idade = new Date(document.getElementById("idade").value);
    const data = new Date("2030/12/31");
    let resultado= data.getFullYear() - idade.getFullYear();
    document.getElementById("calculo").innerHTML = 'Sua idade será: ' + resultado;
}
