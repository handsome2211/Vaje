console.log("javascript deluje");

function buttonClicked(){
    
    var starost = document.getElementById("starost").value; // Dobimo vrednost input type elementa.
    var paragraf = document.getElementById("rezultat");  // Dobimo vrednost paragrafa z id rezultat.
    event.preventDefault()
    console.log("button clicked"); // Preverimo če dela event listener.
    console.log(starost);          // Preverimo če se vrednost shrani v spremenljivko

    if(starost < 13){
        console.log("Ti si še otrok");
        paragraf.innerHTML="tvoja starost je " +starost;
    }

    else if(starost >= 13 && starost <= 19){
        console.log("ti si najstnik");
        paragraf.innerHTML="tvoja starost je " + starost;
    }

    else if(starost > 19) {
        console.log("ti si odrasel");
        paragraf.innerHTML="tvoja starost je" + starost;
    }

    
}

function Resetiraj(){
    console.log("pritisnil si resetiraj");
    document.getElementById("starost").value="";
    document.getElementById("rezultat").innerHTML = " ";
}


var btn = document.getElementById("izracunaj");
var btn2 = document.getElementById("resetiraj");

btn.addEventListener("click",buttonClicked);
btn2.addEventListener("click",Resetiraj);
