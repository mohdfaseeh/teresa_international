export async function addItemsToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find((item) => item.product._id === product._id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      product,
      quantity: 1,
    });
  }

  cart[cart.indexOf(existingProduct)] = existingProduct;

  localStorage.setItem('cart', JSON.stringify(cart));
}

export async function handleIncrementToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find((item) => item.product._id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  }

  cart[cart.indexOf(existingProduct)] = existingProduct;

  localStorage.setItem('cart', JSON.stringify(cart));
}

export async function handleDecrementToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find((item) => item.product._id === id);

  if (existingProduct) {
    existingProduct.quantity -= 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

export async function handleRemoveItemFromCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find((item) => item.product._id === id);

  if (existingProduct) {
    cart.splice(cart.indexOf(existingProduct), 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}
