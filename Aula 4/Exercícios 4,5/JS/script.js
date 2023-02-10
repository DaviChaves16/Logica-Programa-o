function media(){
    const calcular= Number(document.getElementById("notas").value);

    if (calcular < 0 || calcular > 10)
        document.getElementById("aprovacao").innerHTML = 'Nota inválida!'

    else if (calcular >= 0 && calcular < 4)
        document.getElementById("aprovacao").innerHTML = 'Aluno reprovado!'

    else if (calcular >= 4 && calcular < 7)
        document.getElementById("aprovacao").innerHTML = 'Aluno em recuperação!'

    else 
        document.getElementById("aprovacao").innerHTML = 'Aluno aprovado!';

    
}