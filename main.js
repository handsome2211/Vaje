console.log("javascript deluje");


function kalkulator(event){

    if(event){
    event.preventDefault();                     
    }
    var st1 = parseFloat(num1.value);               // v st1 sharnimo value od input. parseFloat nekak konverta iz stringa v stevilko, ker input najverjetne shrani kot string tudi ce je številka
    var st2 = parseFloat(num2.value);               //isto v st2
    var test = operator.value;
    var izracun;
    console.log("vrednost 1 je ",num1.value ,"vrednost 2 je ",num2.value);
    console.log("tvoja operacija je", test);

    
    
    switch(test){
        case "minus":
        if(isNaN(st1) || isNaN(st2)){                  //preveri ali je vpisana številka IsNan je metoda ki preverja ali je vpisana stevilka
            alert("prosim vpiši številke");
            return;
        }
        izracun = st1 - st2;
        console.log("izbral si minus rezultat", izracun);
        rezultat.value = izracun;
        console.log(izracun);
        break;

        case "plus":
        if(isNaN(st1) || isNaN(st2)){
            alert("prosim vpiši številke");
            return;
        }
        izracun = st1 + st2;
        console.log("izbral si plus rezultat", izracun);
        rezultat.value = izracun;
        break;

        case "krat":
        if(isNaN(st1) || isNaN(st2)){
            alert("prosim vpiši številke");
            return;
        }
        izracun = st1 * st2;
        console.log("izbral si krat rezultat", izracun);
        rezultat.value = izracun;
        break;

        case "deljeno":
        if(isNaN(st1) || isNaN(st2)){
            alert("prosim vpiši številke");
            return;
        }
        if(st1 == 0 || st2 == 0 ){
            console.log("z 0 ni mozno deliti");
            alert("z 0 ni mozno deliti");
            return;
        }
        izracun = st1 / st2;
        console.log("izbral si deljeno rezultat", izracun);
        rezultat.value = izracun;
        break;
    }

    
}

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

var num1 = document.getElementById("tekst");
var num2 = document.getElementById("tekst2");
var operator = document.getElementById("operacija");
var rezultat = document.getElementById("izid");
var btn = document.getElementById("izracunaj");
var btn2 = document.getElementById("resetiraj");
var btn3 = document.getElementById("shrani");
var btn4 = document.getElementById("poslji");
let tabela = [];


btn.addEventListener("click",buttonClicked);
btn2.addEventListener("click",Resetiraj);
btn3.addEventListener("click",Shrani);
btn4.addEventListener("click",kalkulator);


