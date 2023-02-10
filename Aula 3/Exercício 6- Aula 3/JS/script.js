
//function calcular(){
    //const calcular = Number(document.getElementById("x").value);
    //let resultado = calcular - calcular * 0.06 - calcular * 0.08
    //document.getElementById("salarioliquido").innerHTML = 'Seu salário liquído é: R$' + resultado
//}

function calcular(){
    const calcular = Number(document.getElementById("x").value)
    let vale = calcular * 0.06 
    document.getElementById("vale").value = vale
    let inss = calcular * 0.08 
    document.getElementById("inss").value = inss
    let resultado = calcular - calcular * 0.06 - calcular * 0.08
    document.getElementById("salarioliquido").value =  resultado

}