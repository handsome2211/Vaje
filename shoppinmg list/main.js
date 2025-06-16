'use strict';

const div = document.getElementById('product');
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

products.forEach(element => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `  
  <h1 class="naslov"> ${element.name} </h1>  
  <div class="card-1"> ${element.price}€ </div>
  <div class="card-2">${element.image} </div> 
  <button class="btn"> Add to Cart</button> `;
  newDiv.classList.add('card');
  div.appendChild(newDiv);
});
