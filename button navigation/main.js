'strict mode'

function meni(){
    if(mobileMeni.classList.contains('meniMobile')){   // ali vsebuje class z imenom meniMobile
        /*mobileMeni.classList.remove('meniMobile');     //odstrani class
        mobileMeni.classList.add('show');              //doda class. Lahko napisemo vec clasov v isti vrsti(classList.add('show','meniMobileList');
        mobileMeni.classList.add('meniMobileList');
        */
       mobileMeni.className = 'show meniMobileList';
    } else {
        /*
        mobileMeni.classList.remove('meniMobileList');
        mobileMeni.classList.remove('show');
        mobileMeni.classList.add('meniMobile');
        */
       mobileMeni.className = 'meniMobile meniMobileList';
    }
}

let btn = document.getElementById('gumb')
let mobileMeni = document.getElementById('meni');
btn.addEventListener('click',meni);