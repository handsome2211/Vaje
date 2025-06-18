'use strict';

const div = document.getElementById('product');
const btn = document.querySelector('.cart-btn');
const menu = document.querySelector('.menu');
let price = [];
const products = [
  {
    name: 'Wireles mouse',
    price: 25,
    image: '🐁',
  },
  {
    name: 'Mechanical keyboard',
    price: 30,
    image: '⌨️',
  },
  {
    name: 'Wireles mouse',
    price: 25,
    image: '🐁',
  },
  {
    name: 'Mechanical keyboard',
    price: 30,
    image: '⌨️',
  },
  {
    name: 'Wireles mouse',
    price: 25,
    image: '🐁',
  },
  {
    name: 'Mechanical keyboard',
    price: 30,
    image: '⌨️',
  },
];

// For each loop kjer naredimo za vsak artikel nov box in ga appendamo v glavni meni!
products.forEach((element, index) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `  
  <h1 class="naslov"> ${element.name} </h1>  
  <div class="card-1"> ${element.price}€ </div>
  <div class="card-2">${element.image} </div> 
  <button class="btn add-to-cart"> Add to Cart</button> `;
  newDiv.classList.add('card'); //dodamo class Listo card
  div.appendChild(newDiv); //apendamo ga na div ki je definiran na začetku. torej meni
  const button = newDiv.querySelector('.btn'); // izberemo vse buttone ki imajo .class btn
  //dodamo event listener kjer klicemo funkcijo
  button.addEventListener('click', function () {
    klik(index, element); //klicemo funkcijo klik. V klik damo notri index in ime elementa
  });
});

//damo event listener na hamburger meni kjer toglamo menu-show class na on in off. meni se pokaze in gre
btn.addEventListener('click', function () {
  menu.classList.toggle('menu-show');
});

//damo event listener na cel dokument.poslusamo click. Event je klik.
document.addEventListener('click', function (event) {
  // clicked buttone = event.target.closest metoda preverimo če se klik ujema z selektorjem. preverimo vse .btn .add-to-cart .menu-button
  const clickedButton = event.target.closest(
    '.btn, .add-to-cart, .menu-button'
  );
  //v if stavku preverimo kaj klikamo z event.target. napiše nam button itd itd. s tem bomo zaprli meni ko kliknemo izven njega.
  if (
    menu.classList.contains('menu-show') && //preverimo če meni vsebujo classo menu-show kar pomeni da je meni odprt.
    !menu.contains(event.target) && // preverimo če ne pritisnemo samega menija
    !btn.contains(event.target) && // preverimo če ne pritisnemo hamburger menija. !btn.contains(event.targer)
    !clickedButton //preverimo če nismo pritisnili na add to cart buttone !
  ) {
    menu.classList.toggle('menu-show'); //skrijemo meni
    console.log(event.target);
  }
});

function klik(index, element) {
  //funkcija klik kjer notri damo index element kot gor v drugi funkciji kjer jo kličemo
  const elementToRemove = menu.querySelector('.prazna'); // targetamo class .prazna kjer je Košarica je prazna
  if (elementToRemove) {
    // če je element to remove true torej če je košarica prazna ta element odstranimo
    elementToRemove.remove();
  }
  const newDiv = document.createElement('div'); //naredimo nov div kjer dodamo notri element.name itd. to je iz arraya objectov.To naredimo za vsak element v arrayu index: 0 in naprej
  newDiv.innerHTML = `                                              
  <div class="menuName">${element.name}</div>                           
  <div class="menuPrice">Price: ${element.price}$</div>
  <div class="menuImg">${element.image}</div> `;
  menu.appendChild(newDiv);
  newDiv.classList.add('menu-item');
  price.push(element.price); // pushamo ceno v array kjer se nabirajo vse cene
  updatePrice(); //update price funkcijo klicemo
}

function updatePrice() {
  let sumArray = price.reduce((acc, currentVal) => acc + currentVal, 0); // uporabumo metodo .reduce ki izracune vse v arrayu.acc je naslednja cifra, curent val je cifra ki je trenutno sesteta
  let priceDiv = menu.querySelector('.koncnaCena'); // v spremenljivko shranimo kar ima klass .koncnaCena
  if (!priceDiv) {
    // če ne obstaja potem naredimo kar je v if stavku
    priceDiv = document.createElement('div'); // naredimo div
    priceDiv.classList.add('koncnaCena'); //dodamo class koncnaCena
    menu.appendChild(priceDiv); //appendamo ga na menu
    priceDiv.textContent = `Total price: ${sumArray}€`; //spremenimo text v ceno
  } else {
    priceDiv.textContent = `Total price: ${sumArray}€`; // če obstaja .koncna cena potem samo spremenimo vrednost in ga appendamo na meni da bo nizje
    menu.appendChild(priceDiv);
  }
}
