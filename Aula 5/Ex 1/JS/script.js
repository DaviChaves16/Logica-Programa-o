function botao(mes) {
    var resposta= mes
    var text

    switch (resposta){
        case 1:
            text= "Mês de Janeiro"
            break;
        case 2:
            text= "Mês de Fevereiro"
            break;
        case 3:
            text= "Mês de Março"
            break;
        case 4:
            text= "Mês de Abril"
            break;
        case 5: 
            text= "Mês de Maio"
            break;
        case 6:
            text= "Mês de Junho"
            break;
        case 7:
            text= "Mês de Julho"
            break;
        case 8:
            text= "Mês de Agosto"
            break;
        case 9: 
            text= "Mês de Setembro"
            break;
        case 10:
            text= "Mês de Outubro"
            break;
        case 11: 
            text= "Mês de Novembro"
            break;
        case 12:
            text= "Mês de Dezembro"
            break;
        default:
            text= "Número inválido"
        
    }
    document.getElementById("meses").innerHTML = text;
}