'strict mode'

function dodaj(){
    let shIme = ime.value.trim();  //.trim odstrani presledke iz konca in začetka stringa.
    let shTel = tel.value.trim();
    let shMail = mail.value.trim();
    const hasNumbers = /\d/.test(shIme); // preveri ali ima shIme input kaksno stevilko!
    const hasWords = /^[\d\s\+\-\(\)]+$/.test(shTel); // preveri ali ima phone imput kakšne črke oz. to preveri če vsebuje dovoljene elemente kot so digit itd.

    if(hasNumbers ){
        alert(' Ime ne sme vsebovati številk ');
        ime.value = '';
        return;
    }else if(!shIme) {
        alert('Napiši ime');
        return;
    }else{
        kontakt.push(shIme);
    }

    if(!hasWords){
        alert('Neveljavna telefonska številka');
    }

    if(!shMail){
        alert('Napiši email');
        return;
    }

    if(!shMail.includes('@') || !shMail.includes('.')){
        alert(' Neveljaven email naslov');
        shMail.value = '';
        return;
    }
    

    
}

let ime = document.getElementById('name');
let tel = document.getElementById('phone');
let mail = document.getElementById('email');
let btn = document.getElementById('add');
let kontakt = [];

btn.addEventListener('click',dodaj);