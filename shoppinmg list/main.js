'use strict';

const div = document.getElementById('product');
const btn = document.querySelector('.cart-btn');
const menu = document.querySelector('.menu');
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

products.forEach((element, index) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `  
  <h1 class="naslov"> ${element.name} </h1>  
  <div class="card-1"> ${element.price}€ </div>
  <div class="card-2">${element.image} </div> 
  <button class="btn"> Add to Cart</button> `;
  newDiv.classList.add('card');
  div.appendChild(newDiv);
  const button = newDiv.querySelector('.btn');
  button.addEventListener('click', function () {
    klik(index, element);
  });
});

btn.addEventListener('click', function () {
  menu.classList.toggle('menu-show');
});

document.addEventListener('click', function (event) {
  if (
    menu.classList.contains('menu-show') &&
    !menu.contains(event.target) &&
    !btn.contains(event.target)
  ) {
    menu.classList.toggle('menu-show');
    console.log(event.target);
  }
});

function klik(index, element) {
  const elementToRemove = menu.querySelector('.prazna');
  if (elementToRemove) {
    elementToRemove.remove();
  }
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
  <div class="menuName">Name: ${element.name}</div>
  <div class="menuPrice">Price: ${element.price}$</div>
  <div class="menuImg">Image: ${element.image}</div> `;
  menu.appendChild(newDiv);
  newDiv.classList.add('menu-item');
}
