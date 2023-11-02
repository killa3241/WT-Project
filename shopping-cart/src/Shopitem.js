import React, { useState } from 'react';
import './style.css'

const ShopItem = ({ item }) => {
  const { id, name, price, desc, img } = item;
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item">
      <img width="220" src={img} alt={name} />
      <div className="details">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="price-quantity">
          <h2>₹ {price}</h2>
          <div className="buttons">
            <i className="bi bi-dash-square" onClick={decrement}></i>
            <div className="quantity">{quantity}</div>
            <i className="bi bi-plus-square" onClick={increment}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
