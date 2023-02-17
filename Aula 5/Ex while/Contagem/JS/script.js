function cont(){
  let text = "";
  let i = document.getElementById("contagem").value;
  while (i > -1) {
    text += ', ' + i;
    i--;
  }
  document.getElementById("regresso").innerHTML = text;
}