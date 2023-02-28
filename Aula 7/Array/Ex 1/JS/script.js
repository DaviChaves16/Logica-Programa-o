function botao(){
    const valor1 = Number(document.getElementById("valor1").value);
    const valor2 = Number(document.getElementById("valor2").value);
    let resultado = [valor1 , valor2]
    document.getElementById("valor").innerHTML = 'Os números inseridos foram: ' + resultado;
    
}
    