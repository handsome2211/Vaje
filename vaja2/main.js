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

    
    kliki = kliki + 1;
    console.log(kliki);

    if (kliki == 1){
        console.log("ljudi je bilo",+ stej);
        shraniST.innerHTML = stej +",";
        stej = 0;
        steviloLjudi.innerHTML = 0;
    }
    
    else if (kliki == 2 ){
        console.log("ljudi je bilo",+ stej);
        shraniST2.innerHTML = stej + ",";
        stej = 0;
        steviloLjudi.innerHTML = 0;
    }

    else if (kliki == 3){
        console.log("ljudi je bilo"+ stej);
        shraniST3.innerHTML = stej ;
        stej = 0;
        steviloLjudi.innerHTML = 0;
        kliki = 0;
    }

}

shraniST = document.getElementById("kolicina");
shraniST2 = document.getElementById("kolicina2");
shraniST3 = document.getElementById("kolicina3");
steviloLjudi = document.getElementById("stevilo");
dodaj = document.getElementById("btn1");
shrani = document.getElementById("btn2");
var stej = 0;
var kliki = 0;

dodaj.addEventListener("click",sestevaj);
shrani.addEventListener("click",resetiraj);       