var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getrandnum() {
     return Math.random() * 100
  }
  var itemName = item
  var itemPrice = parseInt(getrandnum())
  var newitemforcart = { [itemName]:itemPrice }
  cart.push(newitemforcart)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
    var cartsize = cart.length
    var cartitems = []
    for (i = 0; i<cart.length; i++){
        var itemsprices = cart[i]
        var items = Object.keys(itemsprices)[0]
        var prices = itemsprices[items]
        cartitems.push(` ${items} at ${prices}`)
  		}
  	switch(cartsize){
      case 0:
        console.log("Your shopping cart is empty.")
        break;
      case 1:
        console.log(`In your cart, you have${cartitems}.`)
        break;
      case 2:
        var begarr = cartitems.slice(0,1)
        var endarr = cartitems.slice(1,2)
        console.log(`In your cart, you have${begarr} and${endarr}.`)
        break;
      case 3:
        var begarr = cartitems.slice(0,cartitems.length-1)
        var endarr = cartitems.slice(cartitems.length-1,cartitems.length)
        console.log((`In your cart, you have${begarr}, and${endarr}`))
        break;
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
