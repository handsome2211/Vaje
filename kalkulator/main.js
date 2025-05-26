
function inputNumber(num) {
    if (waitingForNewInput) {
        steviloZdaj = num;
        waitingForNewInput = false;
    } else {
        steviloZdaj = steviloZdaj === '0' ? num : steviloZdaj + num;
        }
        monitor.value=steviloZdaj;
 }
function operator(vrednost){
    
}


const monitor = document.getElementById('monitor');

var steviloZdaj = '0';
var steviloPrej;
var operator = '';
let waitingForNewInput = false ;
