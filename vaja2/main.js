function sestevaj(event){
    if(event){
        event.preventDefault();
    }

    stej = stej + 1;
    console.log("dodal si stevilo",stej);
    steviloLjudi.innerHTML = stej;
}

function resetiraj(event){
    if(event){
        event.preventDefault();
    }

    
    console.log("ljudi je bilo",+ stej);
    shraniST.innerHTML = stej;
    stej = 0;
    steviloLjudi.innerHTML = 0;

}

shraniST = document.getElementById("kolicina");
steviloLjudi = document.getElementById("stevilo");
dodaj = document.getElementById("btn1");
shrani = document.getElementById("btn2");
var stej = 0;

dodaj.addEventListener("click",sestevaj);
shrani.addEventListener("click",resetiraj);       