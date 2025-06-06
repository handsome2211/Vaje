'strict mode'

// preveri ali ima input ime in priimek presledek
function imaPriimek(ime){
    
    return ime.includes(' ');
}

// pocistimo input ko koncamo z dodajanjem kontakta
function pocistiInput(){
    
    ime.value = '';
    tel.value ='';
    mail.value='';
}

// funkcija za izbris kontakta 

function izbrisiKontakt(vrsta){           // izbriše iz imenika. Dobi input value indexa od arraya
    kontakt.splice(vrsta,1);              // odstrani 1 element ( to je object) na dolocenem indexu
    dodajKontakte();
}

// funkcija dodaj kontakt
function dodajKontakte(){
    
    const kontakList = document.getElementById('contactList');                 // dobimo id div concatcList
    if(kontakt.length === 0){                                                           // če je dolžina arraya 0 potem pomeni da ni novih kontakov.
        kontakList.innerHTML = '<div class="no-contacts"> Ni dodanih kontaktov</div>';
        return;
    }

    kontakList.innerHTML = '';                                    // če ne potem zbrisemo kontaktList kjer pise ni dodanih kontakov.
    
    kontakt.forEach((kontakt, index) => {                          // kontak array ForEach. Dostopamo do vsakega indexa (kontakt) predstavlja vsak posamezni object v arrayu
        const div1 = document.createElement('div');                // naredimo novo spremenljivko in shranimo div
        div1.className = 'div1';                                   // mu dodamo class name
        // v div 1 spremenimo inner html tako da damo ul class in liste. kontakt.ime, kontak.tel ubistvu dostopamo do objecta, ki je notri v arrayju!!!! Ta array ima key-e ime tel in email.
        div1.innerHTML =`                                          
        <ul class="imenik">
           <li id="ime">Ime in Priimek : <b>${kontakt.ime}</b>
            <button class="delete-btn" onclick="izbrisiKontakt(${index})">Izbriši</button>
           </li>
           <li id='tel'>Telefonska številka : <b>${kontakt.tel}</b></li>
           <li id='mail'>Email : <b>${kontakt.email}</b></li>
        </ul>
        `;
        contactList.appendChild(div1);
    });
}

function dodaj(){
    let shIme = ime.value.trim();  //.trim odstrani presledke iz konca in začetka stringa.
    let shTel = tel.value.trim();
    let shMail = mail.value.trim(); 
    let priimek = imaPriimek(shIme);
    const hasNumbers = /\d/.test(shIme); // preveri ali ima shIme input kaksno stevilko!
    const hasWords = /^[\d\s\+\-\(\)]+$/.test(shTel); // preveri ali ima phone imput kakšne črke oz. to preveri če vsebuje dovoljene elemente kot so digit itd.

    if(!priimek){
        alert('Vsebovati mora ime in priimek');
        return;
    }else if(hasNumbers ){
        alert(' Ime ne sme vsebovati številk ');
        return;
    }else if(!shIme) {
        alert('Napiši ime');
        return;
    }

    if(!hasWords){
        alert('Neveljavna telefonska številka');
    }else if (!shTel){
        alert('Napiši telefonsko število');
    }

    if(!shMail){
        alert('Napiši email');
        return;
    }else if(!shMail.includes('@') || !shMail.includes('.')){
        alert(' Neveljaven email naslov');
        return;
    }

    //nov object za kontakte v katerega shrani input za ime tel in email in doda unikaten ID 
    const novKontakt = {
        ime: shIme,
        tel: shTel,
        email: shMail,
        id: Date.now()
    };

    kontakt.push(novKontakt);           // dodamo nov kontak v nas array
    console.log(kontakt);
    dodajKontakte();                    // klicemo funkcijo za dodajanje kontaktov
    pocistiInput();
}



let ime = document.getElementById('name');
let tel = document.getElementById('phone');
let mail = document.getElementById('email');
let btn = document.getElementById('add');
let kontakt = [];
let liIme = document.getElementById('ime');
let liTel = document.getElementById('tel');
let liEmail = document.getElementById('mail');

btn.addEventListener('click',dodaj);