
//function calcular(){
    //const calcular = Number(document.getElementById("x").value);
    //let resultado = calcular - calcular * 0.06 - calcular * 0.08
    //document.getElementById("salarioliquido").innerHTML = 'Seu salário liquído é: R$' + resultado
//}

function calcular(){
    const calcular = Number(document.getElementById("x").value)
    let vale = calcular * 0.06 
    document.getElementById("vale").innerHTML = 'Valor vale transporte descontado: R$' + vale
    let inss = calcular * 0.08 
    document.getElementById("inss").innerHTML = 'Valor INSS descontado: R$' + inss
    let resultado = calcular - calcular * 0.06 - calcular * 0.08
    document.getElementById("salarioliquido").innerHTML = 'Salário liquído: R$' + resultado

}