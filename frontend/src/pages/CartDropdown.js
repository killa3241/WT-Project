import React from 'react';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <h3>Cart Items</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total-bill">
        <strong>Total Bill:</strong> ₹{cartItems.reduce((acc, item) => acc + item.price, 0)}
      </div>
    </div>
  );
};

export default CartDropdown;
