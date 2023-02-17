function bot (){
    let text = "";
    let i = 10;
    while (i > -1) {
      text += ", "+ i;
      i--;
    }
    document.getElementById("regresso").innerHTML = text;
  }