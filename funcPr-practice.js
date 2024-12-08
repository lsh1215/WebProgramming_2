const cart = [
  { item: "laptop", price: 1200000, quantity: 1 },
  { item: "mouse", price: 35000, quantity: 2 },
  { item: "keyboard", price: 89000, quantity: 1 },
];
let totalPrice = 0;

// for loop
for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total price: ${totalPrice}`);

// forEach
totalPrice = 0;
cart.forEach((goods) => (totalPrice += goods.price * goods.quantity));
console.log(`Total price: ${totalPrice}`);

// reduce
totalPrice = cart.reduce((res, goods) => res + goods.price * goods.quantity, 0);
console.log(`Total price: ${totalPrice}`);

// map
const itemTotals = cart.map((goods) => ({
  item: goods.item,
  total: goods.price * goods.quantity,
}));
console.log("Price totals:", itemTotals);

// map to uppercase
const names = ["alice", "bob", "charlie"];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

// map to capitalize first letter
const capitalStartNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalStartNames);
