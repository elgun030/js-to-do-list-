const items = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  const itemList = document.getElementById('itemList');
  const cartItems = document.getElementById('cartItems');
  const totalEl = document.getElementById('total');
  let inCart = [];
  
  items.forEach(item => {
    const listItem = `<li>${item.name} - $${item.price} <button onclick="addToCart(${item.id})">Add</button></li>`;
    itemList.innerHTML += listItem;
  });
  
  function addToCart(itemId) {
    const item = items.find(p => p.id === itemId);
    inCart.push(item);
    updateCart();
  }
  
  function updateCart() {
    cartItems.innerHTML = '';
    inCart.forEach((item, index) => {
      const listItem = `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
      cartItems.innerHTML += listItem;
      
    });
    updateTotal();
  }
  
  function removeFromCart(cartIndex) {
    inCart.splice(cartIndex, 1);
    updateCart();
  }
  
  function updateTotal() {
    const total = inCart.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = `Total: $${total}`;
  }