"strict mode";

const div = document.getElementById("product");
const products = [
  {
    name: "Wireles mouse",
    price: 25,
    image: "🐁",
  },
  {
    name: "Mechanical keyboard",
    price: 30,
    image: "⌨️",
  },
  {
    name: "Wireles mouse",
    price: 25,
    image: "🐁",
  },
  {
    name: "Mechanical keyboard",
    price: 30,
    image: "⌨️",
  },
  {
    name: "Wireles mouse",
    price: 25,
    image: "🐁",
  },
  {
    name: "Mechanical keyboard",
    price: 30,
    image: "⌨️",
  },
];

products.forEach((element) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = ` ${element.name} <br/> ${element.price}€ <br>${element.image} `;
  div.appendChild(newDiv);
});
