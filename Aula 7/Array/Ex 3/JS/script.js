function botao(){
    const valor1 = Number(document.getElementById("valor1").value);
    const valor2 = Number(document.getElementById("valor2").value);
    const valor3 = Number(document.getElementById("valor3").value); 
    let resultado = [valor1, valor2, valor3]
    resultado = resultado.sort((valor1,valor2) => valor2-valor1);
    document.getElementById("valor").innerHTML = 'Seus núemros em ordem crescende são: ' + resultado;
}