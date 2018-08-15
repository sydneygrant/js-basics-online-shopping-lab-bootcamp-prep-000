// Use ES6 `${template literals}` instead of `"regular, " + "old " + string + " concatenation."`
// + Brush up on conditionals and control flow to make some Oxford comma magic happen.
//
// ## Instructions
// We've started you off with a `cart` variable that points at an empty array. There are five functions that you'll
// have to code in order to create a working shopping cart:
// 1. The `addToCart()` function accepts one argument, the name of an item.
//     + Use that passed-in string to create a new object representing the item. The object should consist of two key-value
//     pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart`
//     should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 },
//{ itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
//     + The price of each item should be a randomly-generated integer between 1 and 100.
//       * ***HINT***: Look into `Math.random()` and `Math.floor()`.
//     + Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to
//     your cart.` .

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item, itemPrice: price});


}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
