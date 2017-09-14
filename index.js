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
  itemarr = []
  pricearr = []
  for (var i = 0; i < cart.length; i++) {
    pricearr.push(Object.values(cart[i]))
    itemarr.push(Object.keys(cart[i]))
  }
  return itemarr
  if(cart.length === 0){
      console.log('Your shopping cart is empty.')
    }
  else {
    firstcart = []
    lastcart = []
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length - 1) {
        for (var itemName in cart[i]){
          firstcart.push(itemName + 'at' + cart[i][itemName])
      }

      else {
        lastcart.push(itemName + 'at' + cart[i][itemName])
      }
    }
    return firstcart
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
