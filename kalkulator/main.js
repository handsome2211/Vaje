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
    steviloPrej = parseFloat(steviloZdaj);
    console.log(`stevilo ki je shranjeno je ${steviloPrej}`);
    waitingForNewInput = true;
    monitor.value=''; 
    switch(vrednost){
    case '-':
        console.log('izbral si', vrednost);
        kajBo = vrednost;
        console.log(vrednost);
        break;
    case '+':
        console.log('izbral si', vrednost);
        kajBo = vrednost;
        console.log(vrednost);
        break;
    case '*':
        console.log('izbral si', vrednost);
        kajBo = vrednost;
        console.log(vrednost);
        break;
    case '/':
        console.log('izbral si', vrednost)
        kajBo = vrednost;
        console.log(vrednost);
        break;
    }
    
}


function izracunaj (){
    console.log(steviloPrej, steviloZdaj);
    if(kajBo === '-'){
    var racun = steviloPrej - parseFloat(steviloZdaj);
    console.log('izbral si minus');
    console.log('tvoj rezultat je', racun);
    monitor.value = racun;
    }
    
}


const monitor = document.getElementById('monitor');

var kajBo;
var steviloZdaj = '0';
var steviloPrej;
var racun = '';
let waitingForNewInput = false;