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
        console.log('izbral si', vrednost);
        kajBo = vrednost;
        console.log(vrednost);
        break;
    case '**':
        console.log('izbral si', vrednost);
        kajBo = vrednost;
        console.log(vrednost);
        break;
    }
    
}


function izracunaj (){

    
     if(kajBo === '-'){
        racun = steviloPrej - parseFloat(steviloZdaj);
        console.log('izbral si minus');
        console.log('tvoj rezultat je', racun);
        monitor.value = racun;
        waitingForNewInput = true;
    }else if (kajBo === '+'){
        racun = parseFloat(steviloPrej) + parseFloat(steviloZdaj);
        console.log('izbral si plus');
        console.log('tvoj rezultat je', racun);
        monitor.value = racun;
    }else if (kajBo === '*'){
        racun = parseFloat(steviloPrej) * parseFloat(steviloZdaj);
        console.log('izbral si krat');
        console.log('tvoj rezultat je', racun);
        monitor.value = racun;
    }else if (kajBo === '/'){
        racun = parseFloat(steviloPrej) / parseFloat(steviloZdaj);
        console.log('izbral si deljeno');
        console.log('tvoj rezultat je', racun);
        monitor.value = racun;
    }else if (kajBo === '**'){
        racun = parseFloat(steviloPrej) ** parseFloat(steviloZdaj);
        console.log('izbral si potenciranje');
        console.log('tvoj rezultat je',racun);
        monitor.value = racun;
    }
}

function izbrisiVse(){
    monitor.value = '';
    kajBo = '';
    steviloPrej = '';
    steviloZdaj = '';
    racun = '';
}


const monitor = document.getElementById('monitor');

var kajBo;
var steviloZdaj = '0';
var steviloPrej;
var racun = '';
let waitingForNewInput = false;