function botao(atendimento) {
    var resposta= atendimento.toUpperCase()
    var text

    switch (resposta){
        case "A":
            text= "Atendido"
            break;

        case "PA":
            text= "Parcialmente atendido"
            break;

        case "NA":
            text= "Não atendido"
            break;

        default:
            text= "Código inválido"
        
    }
    document.getElementById("acesso").innerHTML = text;
}
