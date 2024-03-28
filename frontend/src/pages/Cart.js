import React from 'react';

const Cart = ({ cartItems, incrementCart, decrementCart }) => {
  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <div className="cart-item-buttons">
            <button onClick={() => decrementCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementCart(item.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
