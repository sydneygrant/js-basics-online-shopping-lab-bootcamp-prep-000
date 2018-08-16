// Use ES6 `${template literals}` instead of `"regular, " + "old " + string + " concatenation."`
// + Brush up on conditionals and control flow to make some Oxford comma magic happen.


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
 return `${item} has been added to your cart.`;

}

`In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + ***Note***: Pay close attention to the syntax above. The returned statement should be a single
    sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes
    according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`

// function viewCart() {
//   // write your code here
//   var str = "In your cart, you have ";
//   if (cart.length == 0){
//     return "Your shopping cart is empty.";
//   } else if (cart.length == 1){
//     str += `${cart[0].key} at ${cart[0].value}.`;
//   } else if (cart.length == 2){
//     str += `${cart[0].key} at ${cart[0].value}, and ${cart[1].key} at ${cart[1].value}.`;
//   } else {
//     for (var i = 0; i < cart.length; i++){
//       str += `${cart[i].key} at ${cart[i].value}, and`;
//       if (i == cart.length-1){
//         str += '.';
//       }
//     }
//   } return str;
// }

function viewCart (){
 if(cart.length === 0){
   return 'Your shopping cart is empty.';
 }
 else{
       var myString = "In your cart, you have "

         for(var i = 0, l = cart.length; i < l; i++){
             for(var list in cart[i]){
             myString+=`${list} at $${cart[i][list]}`
                 if(i!==cart.length-1){
                   myString+=", "
                 }
                 else{
                   myString+="."
                 }
               }

             }

       return myString;
   }

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
