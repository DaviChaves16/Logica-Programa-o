function maiores() {
    var um = Number(document.getElementById("1").value);
    var dois = Number(document.getElementById("2").value);
    var tres = Number(document.getElementById("3").value);
    var maior;

    if (um > dois) {
        if (um > tres)
            maior = um;
        else
            maior = tres;
    }
    else {
        if (dois > tres)
            maior = dois;
        else
            maior = tres;
    }
    alert(maior)
}

function par() {
    var par = Number(document.getElementById("numero").value);

    if (par % 2 == 0)
        alert('Número par')
    else
        alert('Número ímpar')


}