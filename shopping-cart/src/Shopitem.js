import React, { useState } from 'react';
import './style.css'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
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
          <AiFillMinusCircle className="plusminusicons" onClick={decrement}/>  
            <div className="quantity">{quantity}</div>
            <AiFillPlusCircle className="plusminusicons" onClick={increment}/>                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
