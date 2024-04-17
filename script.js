  const cartItems = [];

  function addToCart(productName, price) {
    const existingItem = cartItems.find(item => item.productName === productName);
    if (existingItem) {
      alert('This product is already in the cart.');
      return;
    }
    cartItems.push({ productName, price });
    renderCart();
  }

  function removeFromCart(productName) {
    const index = cartItems.findIndex(item => item.productName === productName);
    cartItems.splice(index, 1);
    renderCart();
  }

  function renderCart() {
    const cartElement = document.getElementById('cart-items');
    cartElement.innerHTML = '';
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.productName} - $${item.price}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeFromCart(item.productName);
      li.appendChild(removeButton);
      cartElement.appendChild(li);
    });
  }
