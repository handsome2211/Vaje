function preveri(){
        if(rng > Number(vrednost.value)){
            prenizka.classList.remove('tooLow');
            prenizka.classList.add('opacity');
            previsoka.classList.remove('opacity');
            previsoka.classList.add('tooHigh');
            poizkusi -=1 ;
            console.log(poizkusi);
            updateGuessCount(poizkusi);
            //koliko.innerHTML = (` ${poizkusi}  Guesses left`);
            if(poizkusi === 0){
                alert('Try again');
            }
        }else if (rng < Number(vrednost.value)){
            previsoka.classList.remove('tooHigh');
            previsoka.classList.add('opacity');
            prenizka.classList.remove('opacity');
            prenizka.classList.add('tooLow');
            poizkusi -=1 ;
            console.log(poizkusi);
            updateGuessCount(poizkusi);
            //koliko.innerHTML = (` ${poizkusi} Guesses left`);
            if(poizkusi === 0){
                alert('Try again');
            }
        }else if (rng === Number(vrednost.value)){
            alert('You guessed the correct number!');
        }
    
}

function startAgain(){
    updateGuessCount(10);
    poizkusi = 10;
    vrednost.value = '';
    prenizka.classList.remove('opacity');
    prenizka.classList.add('tooLow');
    previsoka.classList.remove('opacity');
    previsoka.classList.add('tooHigh');
    rng = Math.floor(Math.random() * 100) + 1;
    console.log(rng);
}

function updateGuessCount(poizkusi) {
    let koliko = document.getElementById('kolikoPoizkusov');
    koliko.classList.add('fade-out');

    setTimeout(() => {
        koliko.innerHTML = `${poizkusi} Guesses left`;
        koliko.classList.remove('fade-out'); // Fade back in
    }, 300)
}


let rng = Math.floor(Math.random() * 100) + 1;
console.log(rng);

let poizkusi = 10;
//let koliko = document.getElementById('kolikoPoizkusov');
let vrednost = document.getElementById('enter');
let bnt = document.getElementById('guess');
let btn1 = document.getElementById('tryAgain');
let prenizka = document.getElementById('tooLow');
let previsoka = document.getElementById('tooHigh');

bnt.addEventListener('click',preveri);
btn1.addEventListener('click',startAgain);
