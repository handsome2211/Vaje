function filmi(){

    var vrednost = stevilo.value;
    console.log("tvojih najljubsih filmo je ",+ vrednost);
}

var btn = document.getElementById("gumb");
var stevilo = document.getElementById("Stfilmi");

btn.addEventListener("click",filmi);