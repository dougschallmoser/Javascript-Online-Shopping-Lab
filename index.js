// Declaring the cart variable as an array
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


// Adding items to the cart
function addToCart(name) {
  const price = Math.floor(Math.random() * 100)
  let itemSet = {
    itemName: name,
    itemPrice: price
    };
  cart.push(itemSet);
  return (`${name} has been added to your cart.`);
};


// Viewing items in the cart
function viewCart() {
  let cartContains = ''
    if (cart.length === 1) {
      cartContains = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
      }
    else if (cart.length === 2) {
      cartContains = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
      }
    else if (cart.length >= 3) {
      cartContains = (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
      }
    else if (cart.length === 0) {
      cartContains = "Your shopping cart is empty."
      }
    return cartContains
}


// Computing the total price of items
function total() {
  let theSum = 0;

  for (let i = 0; i < cart.length; i++) {
    theSum += cart[i].itemPrice;
    }
  return theSum;
}


// Removing item from cart
function removeFromCart(name) {
  let removal = 'That item is not in your cart.';

  for (let i = 1; i < cart.length; i++) {
      if (name = cart[i].itemName)
        removal = cart.splice(i, 1);
        }
      return removal
}


// Placing your order
function placeOrder(cardNumber) {
  let transaction = '';

    if (cardNumber !== undefined) {
      transaction = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart = [];
        }
    else {
      transaction = "Sorry, we don't have a credit card on file for you.";
        }
    return transaction
}



/*
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
  */
