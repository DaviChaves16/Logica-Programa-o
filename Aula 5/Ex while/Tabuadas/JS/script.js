function tabuadas(){
    let text = " ";
    let i = document.getElementById("tabuada").value;
    let x = -1;
    let result;
    while (x < 10) {
        x= x+1;
        result = i * x;
        text += i + "x" + (x) + "=" + result + "<br/>"}

    document.getElementById("mult").innerHTML =text;
  }