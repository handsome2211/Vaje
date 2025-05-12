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

function Shrani(){
    var filmi = document.getElementById("filmi").value;  // dobimo vrednost input typa in jo shranimo v filmi.
    let dolzina = parseInt(filmi);                       // v spremenljivko dolzina shranimo stevilko vrednosti iz filma.
    console.log("tvojih najljubših filmov je " + filmi);
    
    if (isNaN(dolzina) || dolzina < 0) {                 // preveri ali je spremenljivka dolzina številka, če ni vrne napako!!! IsNan( not a number)     
        alert("Vnesi veljavno pozitivno številko.");
        return;
    }

    tabela.length = 0;


    for (let i = 0; i < dolzina; i++) {                 // s for zanko loopamo skozi vrednost, ki smo jo vpisali in pushamo v array(dodajamo)
        tabela.push(i);
    }

    console.log("Tvoja tabela:", tabela);

}

var btn = document.getElementById("izracunaj");
var btn2 = document.getElementById("resetiraj");
var btn3 = document.getElementById("shrani");
let tabela = [];


btn.addEventListener("click",buttonClicked);
btn2.addEventListener("click",Resetiraj);
btn3.addEventListener("click",Shrani);


