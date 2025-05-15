function filmi(){

    array = [];
    var vrednost = stevilo.value;
    console.log("tvojih najljubsih filmo je ",+ vrednost);

    for(var i = 0; i < vrednost ; i++){
        array.push(i);
    }
    element.classList.remove("vloga");
    element.classList.add("pokazi");
    console.log(array);
}

var btn = document.getElementById("gumb");
var stevilo = document.getElementById("Stfilmi");
var array = [];
var element = document.getElementById("inputi");

btn.addEventListener("click",filmi);