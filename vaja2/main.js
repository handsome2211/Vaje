function sestevaj(event){
    if(event){
        event.preventDefault();
    }

    stej = stej + 1;
    console.log("dodal si stevilo",stej);
    steviloLjudi.innerHTML = stej;
}

steviloLjudi = document.getElementById("stevilo");
dodaj = document.getElementById("btn1");
shrani = document.getElementById("btn2");
var stej = 0;

dodaj.addEventListener("click",sestevaj);